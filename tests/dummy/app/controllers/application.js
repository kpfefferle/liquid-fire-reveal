import Ember from 'ember';

export default Ember.Controller.extend({
  revealDownRed: true,
  revealUpRed: true,
  revealLeftRed: true,
  revealRightRed: true,
  hideDownRed: true,
  hideUpRed: true,
  hideLeftRed: true,
  hideRightRed: true,

  actions: {
    toggleRevealDown() {
      this.toggleProperty('revealDownRed');
    },
    toggleRevealUp() {
      this.toggleProperty('revealUpRed');
    },
    toggleRevealLeft() {
      this.toggleProperty('revealLeftRed');
    },
    toggleRevealRight() {
      this.toggleProperty('revealRightRed');
    },
    toggleHideDown() {
      this.toggleProperty('hideDownRed');
    },
    toggleHideUp() {
      this.toggleProperty('hideUpRed');
    },
    toggleHideLeft() {
      this.toggleProperty('hideLeftRed');
    },
    toggleHideRight() {
      this.toggleProperty('hideRightRed');
    }
  }
});
