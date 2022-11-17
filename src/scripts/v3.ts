import Helper from './helper';

class Stepper3 {
  private _progressElement = Helper.checkForNull(
    document.getElementById('v3-progress')
  ) as HTMLElement;

  private _stepElements = Helper.checkForNull(
    document.querySelectorAll('.v3 .step')
  ) as NodeListOf<Element>;

  // Methods
  update(step: number, type: number): void {
    this._progressElement.style.setProperty('--p', `${(step - 1) * 33.33}%`);
    this._stepElements[step - 1]?.classList.add('h-v3-current');
    this._stepElements[step - 1]?.classList.remove('h-v3-completed');
    if (type) {
      this._stepElements[step - 2]?.classList.remove('h-v3-current');
      this._stepElements[step - 2]?.classList.add('h-v3-completed');
    } else {
      this._stepElements[step]?.classList.remove('h-v3-current');
    }
  }
}

export default new Stepper3();
