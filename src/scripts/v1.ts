import Helper from './helper';

class Stepper1 {
  private _stepElements = Helper.checkForNull(
    document.querySelectorAll('.v1 .plate')
  ) as NodeListOf<Element>;

  update(step: number, type: number): void {
    if (type) {
      this._stepElements[step - 1]?.classList.add('h-v1-completed');
    } else {
      this._stepElements[step]?.classList.remove('h-v1-completed');
    }
  }
}

export default new Stepper1();
