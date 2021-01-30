import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Controller {
  @tracked downRed = true;
  @tracked upRed = true;
  @tracked leftRed = true;
  @tracked rightRed = true;

  @action
  toggleDown() {
    this.downRed = !this.downRed
  }

  @action
  toggleUp() {
    this.upRed = !this.upRed;
  }

  @action
  toggleLeft() {
    this.leftRed = !this.leftRed;
  }

  @action
  toggleRight() {
    this.rightRed = !this.rightRed;
  }
}
