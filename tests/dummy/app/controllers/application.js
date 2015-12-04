import Ember from 'ember';

export default Ember.Controller.extend({
  downRed: true,
  upRed: true,
  leftRed: true,
  rightRed: true,

  actions: {
    toggleDown() {
      this.toggleProperty('downRed');
    },
    toggleUp() {
      this.toggleProperty('upRed');
    },
    toggleLeft() {
      this.toggleProperty('leftRed');
    },
    toggleRight() {
      this.toggleProperty('rightRed');
    }
  }
});
