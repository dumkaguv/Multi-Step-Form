class FormsValidation {
  selectors = {
    root: "[data-js-form]",
    stepLabel: "[data-js-form-step]",

    field: "[data-js-form-field]",
    fieldControl: "[data-js-form-field-control]",
    fieldErrors: "[data-js-field-errors]",
    fieldEmail: "[data-js-form-field-control-email]",
    fieldPhone: "[data-js-form-field-control-phone]",

    formActions: "[data-js-form-actions]",
    nextStepButton: "[data-js-form-actions-next]",
    prevStepButton: "[data-js-form-actions-prev]",
  };

  stateClasses = {
    stepLabelActive: "steps__label--active",
  };

  errorMessages = {
    valueMissing: "This field is required",
    incorrectPattern: (pattern) => `${pattern}`,
  };

  constructor(formStepsControllerInstance) {
    this.formStepsControllerInstance = formStepsControllerInstance;
    this.init();
    this.bindEvents();
  }

  init = () => {
    this.rootElement = document.querySelector(this.selectors.root);
    this.stepLabelElements = this.rootElement.querySelectorAll(
      this.selectors.stepLabel
    );
    this.fieldControlElements = this.rootElement.querySelectorAll(
      this.selectors.fieldControl
    );
    this.formActionsElement = document.querySelectorAll(
      this.selectors.formActions
    );
    this.currentStep = this.formStepsControllerInstance.currentStep;

    this.markCurrentStepLabel();
  };

  manageErrors = (fieldElement, errorMessage) => {
    if (errorMessage) {
      fieldElement.insertAdjacentHTML(
        "beforeend",
        this.getErrorTemplateHTML(errorMessage)
      );

      return false;
    }
  };

  manageErrorsType = (fieldControlElement, fieldElement) => {
    const isEmptyField = fieldControlElement.value.length === 0;
    const isEmailField = fieldControlElement.hasAttribute(
      this.selectors.fieldEmail.replace("[", "").replace("]", "")
    );
    const isPhoneField = fieldControlElement.hasAttribute(
      this.selectors.fieldPhone.replace("[", "").replace("]", "")
    );

    if (isEmptyField) {
      return this.manageErrors(
        fieldElement,
        this.errorMessages.valueMissing
      );
    } else if (isEmailField) {
      const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailPattern.test(fieldControlElement.value)) {
        return this.manageErrors(
          fieldElement,
          this.errorMessages.incorrectPattern(fieldControlElement.title)
        );
      }
    } else if (isPhoneField) {
      const phonePattern = /^\+1\d{9}$/;
      if (!phonePattern.test(fieldControlElement.value)) {
        return this.manageErrors(
          fieldElement,
          this.errorMessages.incorrectPattern(fieldControlElement.title)
        );
      }
    }

    return true;
  };

  validateField = (fieldControlElement) => {
    const fieldElement = fieldControlElement.closest(this.selectors.field);

    const errorFieldElement = fieldElement.querySelector(
      this.selectors.fieldErrors
    );
    errorFieldElement?.remove();

    return this.manageErrorsType(fieldControlElement, fieldElement);
  };

  onFocusOut = (event) => {
    const target = event.target;
    const isFormField = target.closest(this.selectors.fieldControl);
    const isRequired = target.required;

    if (isFormField && isRequired) {
      this.validateField(target);
    }
  };

  onFormActionsClick = (event) => {
    const target = event.target;

    if (target === document.querySelector(this.selectors.nextStepButton)) {
      let isFormValid = true;
      let firstInvalidFieldControl = null;
      const requiredControlElements = [
        ...this.fieldControlElements,
      ].filter(({ required }) => required);

      requiredControlElements.forEach((fieldControlElement) => {
        const isFieldValid = this.validateField(fieldControlElement);

        if (!isFieldValid) {
          isFormValid = false;

          if (!firstInvalidFieldControl) {
            firstInvalidFieldControl = fieldControlElement;
          }
        }
      });

      if (!isFormValid) {
        event.preventDefault();
        firstInvalidFieldControl.focus();
      }
    }
  };

  bindEvents = () => {
    document.addEventListener("focusout", this.onFocusOut);
    this.formActionsElement.forEach((element) => {
      element.addEventListener("click", this.onFormActionsClick);
    });
  };

  markCurrentStepLabel = () => {
    this.stepLabelElements.forEach((element, indexElement) => {
      const isCurrentStep = this.currentStep === indexElement;
      element.classList.toggle(
        this.stateClasses.stepLabelActive,
        isCurrentStep
      );
    });
  };

  getErrorTemplateHTML = (errorMessage) => {
    return `<span class="field__errors" data-js-field-errors>${errorMessage}</span>`;
  };
}

export default FormsValidation;
