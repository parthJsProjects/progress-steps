import Helper from './helper';

class Stepper2 {
  private _progressElement = Helper.checkForNull(
    document.getElementById('v2-progress')
  ) as HTMLElement;

  update(step: number): void {
    this._progressElement.style.setProperty('--p', `${step * 25}%`);
    this._progressElement.dataset['p'] = '' + step * 25;
  }
}

export default new Stepper2();
