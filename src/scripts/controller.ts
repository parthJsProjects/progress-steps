import Helper from './helper';
import steppers from './steppers';

class Controller {
  private _nextButton = Helper.checkForNull(
    document.getElementById('next')
  ) as HTMLElement;
  private _prevButton = Helper.checkForNull(
    document.getElementById('prev')
  ) as HTMLElement;
  private static _currentStep = 1;
  private static _lowestStep = 1;
  private static _highestStep = 4;

  // Getters and Setters
  get nextButton(): HTMLElement {
    return this._nextButton;
  }
  get prevButton(): HTMLElement {
    return this._prevButton;
  }

  // Methods
  next(): void {
    if (Controller._currentStep < Controller._highestStep) {
      Controller._currentStep++;
      this._update();
      steppers.forEach((stepper) => {
        stepper.update(Controller._currentStep, 1);
      });
    }
  }

  prev(): void {
    if (Controller._currentStep > Controller._lowestStep) {
      Controller._currentStep--;
      this._update();
      steppers.forEach((stepper) => {
        stepper.update(Controller._currentStep, 0);
      });
    }
  }

  private _update(): void {
    switch (Controller._currentStep) {
      case Controller._lowestStep:
        this._prevButton.classList.remove('h-active');
        this._nextButton.classList.add('h-active');
        break;
      case Controller._highestStep:
        this._prevButton.classList.add('h-active');
        this._nextButton.classList.remove('h-active');
        break;
      default:
        this._prevButton.classList.add('h-active');
        this._nextButton.classList.add('h-active');
    }
  }
}

export default new Controller();
