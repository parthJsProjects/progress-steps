import Helper from './helper';

class Stepper4 {
  private _blockElements = Helper.checkForNull(
    document.querySelectorAll('.v4 .block')
  ) as NodeListOf<Element>;

  // Methods
  update(step: number, type: number): void {
    if (type) {
      this._blockElements[step - 1]?.classList.add('h-v4-visible');
    } else {
      this._blockElements[step]?.classList.remove('h-v4-visible');
    }
  }
}

export default new Stepper4();
