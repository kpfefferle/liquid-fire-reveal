import { animate, Promise, isAnimating, finish } from 'liquid-fire';

export default function reveal(dimension, direction, opts) {
  let property, measure, firstStep;
  let oldParams = {};
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
    var bigger = biggestSize(this, measure);
    oldParams[property] = bigger * direction + 'px';

    this.oldElement.css({ visibility: '', zIndex: 1 });
    this.newElement.css({ visibility: '', zIndex: 0 });
    return animate(this.oldElement, oldParams, opts, 'revealing-out');
  });
}

function biggestSize(context, dimension) {
  var sizes = [];
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
  for (var i = 0; i < context.older.length; i++) {
    var entry = context.older[i];
    if (isAnimating(entry.element, 'revealing-out')) {
      return entry.element;
    }
  }
  if (isAnimating(context.oldElement, 'revealing-out')) {
    return context.oldElement;
  }
}
