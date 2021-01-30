export default function () {
  this.transition(
    this.hasClass('down'),
    this.use('revealDown', { duration: 1000 })
  );
  this.transition(
    this.hasClass('up'),
    this.use('revealUp', { duration: 1000 })
  );
  this.transition(
    this.hasClass('left'),
    this.use('revealLeft', { duration: 1000 })
  );
  this.transition(
    this.hasClass('right'),
    this.use('revealRight', { duration: 1000 })
  );
}
