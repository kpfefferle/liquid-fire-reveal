export default function() {
  this.transition(
    this.hasClass('reveal-down'),
    this.use('revealDown', { shadow: true, duration: 1000 })
  );
  this.transition(
    this.hasClass('reveal-up'),
    this.use('revealUp', { shadow: true, duration: 1000 })
  );
  this.transition(
    this.hasClass('reveal-left'),
    this.use('revealLeft', { shadow: true, duration: 1000 })
  );
  this.transition(
    this.hasClass('reveal-right'),
    this.use('revealRight', { shadow: true, duration: 1000 })
  );
  this.transition(
    this.hasClass('hide-down'),
    this.use('hideDown', { shadow: true, duration: 1000 })
  );
  this.transition(
    this.hasClass('hide-up'),
    this.use('hideUp', { shadow: true, duration: 1000 })
  );
  this.transition(
    this.hasClass('hide-left'),
    this.use('hideLeft', { shadow: true, duration: 1000 })
  );
  this.transition(
    this.hasClass('hide-right'),
    this.use('hideRight', { shadow: true, duration: 1000 })
  );
}
