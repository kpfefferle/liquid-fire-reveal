import { animate, Promise, isAnimating, finish } from "liquid-fire";

// spread of the shadow effect added during transitioning if opts.shadow is set
const shadowSize = 50;

export default function reveal(dimension, direction, opts, reveal=true) {
  let property, measure, firstStep;
  let oldParams = {};
  let newParams = {};
  const revealingElement = findRevealingElement(this);

  if (dimension.toLowerCase() === 'x') {
    property = 'translateX';
    measure = 'width';
  } else {
    property = 'translateY';
    measure = 'height';
  }

  if (revealingElement) {
    // We still have some older version that is in the process of
    // revealing, so our first step is waiting for it to finish.
    firstStep = finish(revealingElement, 'revealing-out');
  } else {
    firstStep = Promise.resolve();
  }

  return firstStep.then(() => {
    let adjustment = opts.shadow ? shadowSize : 0;
    let bigger = biggestSize(this, measure) + adjustment;

    let [ topElement, bottomElement ] = [ this.oldElement, this.newElement ];
    let [ fromSize, toSize ] = [ 0, bigger * direction ];

    if (!reveal) {
      [ bottomElement, topElement ] =  [ topElement, bottomElement ];
      [ toSize, fromSize ] = [ fromSize, toSize ];
    }

    oldParams[property] = `${fromSize}px`;
    newParams[property] = `${toSize}px`;

    bottomElement.css({
      visibility: '',
      zIndex: 0
    });
    topElement.css({
      visibility: '',
      zIndex: 1,
    });
    if (opts.shadow) {
      topElement.css({
        boxShadow: `0px 10px ${shadowSize}px 20px rgba(0,0,0,0.15)`
      });
    }
    return animate(topElement, oldParams, { duration: 0 }, 'revealing-out').then(() => {
      return animate(topElement, newParams, opts, 'revealing-out');
    });
  });
}

function biggestSize(context, dimension) {
  let sizes = [];
  if (context.newElement) {
    sizes.push(parseInt(context.newElement.css(dimension), 10));
    sizes.push(parseInt(context.newElement.parent().css(dimension), 10));
  }
  if (context.oldElement) {
    sizes.push(parseInt(context.oldElement.css(dimension), 10));
    sizes.push(parseInt(context.oldElement.parent().css(dimension), 10));
  }
  return Math.max.apply(null, sizes);
}

function findRevealingElement(context) {
  for (let i = 0; i < context.older.length; i++) {
    let entry = context.older[i];
    if (isAnimating(entry.element, 'revealing-out')) {
      return entry.element;
    }
  }
  if (isAnimating(context.oldElement, 'revealing-out')) {
    return context.oldElement;
  }
}
