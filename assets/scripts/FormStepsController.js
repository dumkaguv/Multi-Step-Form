import steps from "./steps.js";

class FormStepsController {
  selectors = {
    root: "[data-js-root]",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.currentStep = 1;
  }

  formatStep(step) {
    return `step-${step}`;
  }

  renderStep = (step, isForward = true) => {
    this.rootElement.innerHTML = "";
    this.rootElement.insertAdjacentHTML(
      "beforeend",
      steps[this.formatStep(step)]
    );

    this.currentStep = this.currentStep + (isForward ? 1 : -1);

    if (this.currentStep < 0) {
      this.currentStep = 0;
    }
  };
}

export default FormStepsController;
