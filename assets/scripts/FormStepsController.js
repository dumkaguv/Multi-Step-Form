import steps from "./steps.js";

class FormStepsController {
  selectors = {
    root: "[data-js-root]",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.currentStep = 0;
    this.init();
  }

  formatStep(step) {
    return `step-${step}`;
  }

  renderStep = (isForward = true) => {
    this.rootElement.innerHTML = "";
    this.rootElement.insertAdjacentHTML(
      "beforeend",
      steps[this.formatStep(this.currentStep)]
    );

    this.currentStep = this.currentStep + (isForward ? 1 : -1);
    
  }

  init() {
    this.renderStep();
    this.currentStep--;
  }
}

export default FormStepsController;
