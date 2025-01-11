const root = "[data-js-form]";

class FormsValidation {
  selectors = {
    stepLabel: "[data-js-form-step]",
  };

  stateClasses = {
    stepLabelActive: "steps__label--active",
  };

  stepValidationClasses = {
    0: Step_0_Validation,
    1: Step_1_Validation,
    2: Step_2_Validation,
  };

  constructor(formStepsControllerInstance) {
    this.formStepsControllerInstance = formStepsControllerInstance;
    this.currentStep = this.formStepsControllerInstance.currentStep;
    this.data = {};

    this.init();
  }

  init = () => {
    const StepValidator = this.stepValidationClasses[this.currentStep];

    if (StepValidator) {
      console.log(this.data);
      this.formStepsControllerInstance.renderStep(this.currentStep);
      new StepValidator(this);
      this.markCurrentStepLabel();
    }
  };

  saveData = (data = {}) => {
    this.data = { ...this.data, ...data };
  };

  markCurrentStepLabel = () => {
    this.rootElement = document.querySelector(root);
    this.stepLabelElements = this.rootElement.querySelectorAll(
      this.selectors.stepLabel
    );

    this.stepLabelElements.forEach((element, indexElement) => {
      const isCurrentStep = this.currentStep === indexElement;
      element.classList.toggle(
        this.stateClasses.stepLabelActive,
        isCurrentStep
      );
    });
  };
}

class Step_0_Validation {
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

  errorMessages = {
    valueMissing: "This field is required",
    incorrectPattern: (pattern) => `${pattern}`,
  };

  constructor(formsValidationInstance) {
    this.formsValidationInstance = formsValidationInstance;
    this.rootElement = document.querySelector(root);
    this.fieldControlElements = this.rootElement.querySelectorAll(
      this.selectors.fieldControl
    );
    this.formActionsElement = document.querySelectorAll(
      this.selectors.formActions
    );
    this.data = {};

    this.bindEvents();
  }

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
    const nextButtons = document.querySelectorAll(
      this.selectors.nextStepButton
    );
    const isNextButton = [...nextButtons].some(
      (button) => button === target
    );

    if (isNextButton) {
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
        return;
      }

      this.saveData();

      this.formsValidationInstance.currentStep++;
      this.formsValidationInstance.init();
    }
  };

  saveData = () => {
    [...this.fieldControlElements].forEach((fieldControlElement) => {
      const inputValue = fieldControlElement.value;
      const inputName = fieldControlElement.id;
      this.data[inputName] = inputValue;
    });

    this.formsValidationInstance.saveData(this.data);
  };

  bindEvents = () => {
    document.addEventListener("focusout", this.onFocusOut);

    this.formActionsElement.forEach((element) => {
      element.addEventListener("click", this.onFormActionsClick);
    });
  };

  getErrorTemplateHTML = (errorMessage) => {
    return `<span class="field__errors" data-js-field-errors>${errorMessage}</span>`;
  };
}

class Step_1_Validation {
  selectors = {
    switcher: "[data-js-switcher]",
    switcherCheckbox: "[data-js-switcher-checkbox]",
    switcherToggle: "[data-js-switcher-toggle]",
    switcherVariants: {
      switcherVariant_1: "[data-js-switcher-variant-1]",
      switcherVariant_2: "[data-js-switcher-variant-2]",
    },

    plansCard: "[data-js-form-plans-card]",
    plansCardInfo: "[data-js-plans-card-info]",

    formActions: "[data-js-form-actions]",
    nextStepButton: "[data-js-form-actions-next]",
    prevStepButton: "[data-js-form-actions-prev]",
  };

  stateClasses = {
    switcherVarianActive: "switcher__variant--active",
    plansCardIsSelected: "is-selected",
  };

  constructor(formsValidationInstance) {
    this.formsValidationInstance = formsValidationInstance;
    this.rootElement = document.querySelector(root);

    this.switcherElement = this.rootElement.querySelector(
      this.selectors.switcher
    );
    this.switcherCheckboxElement = this.switcherElement.querySelector(
      this.selectors.switcherCheckbox
    );
    this.switcherToggleElement = this.switcherElement.querySelector(
      this.selectors.switcherToggle
    );
    this.switcherVariantElement_1 = this.switcherElement.querySelector(
      this.selectors.switcherVariants.switcherVariant_1
    );
    this.switcherVariantElement_2 = this.switcherElement.querySelector(
      this.selectors.switcherVariants.switcherVariant_2
    );

    this.plansCardElements = this.rootElement.querySelectorAll(
      this.selectors.plansCard
    );

    this.formActionsElement = document.querySelectorAll(
      this.selectors.formActions
    );

    this.data = {};

    this.bindEvents();
  }

  addExtraTextSwitcherCard = (isChecked) => {
    const templateHTML = `<span class="plans__card-info-extra" data-plan-extra>2 months free</span>`;

    [...this.plansCardElements].forEach((plansCardElement) => {
      const cardBodyElement = plansCardElement.querySelector(
        this.selectors.plansCardInfo
      );
      if (isChecked) {
        cardBodyElement.insertAdjacentHTML("beforeend", templateHTML);
      } else {
        plansCardElement.querySelector("[data-plan-extra]").remove();
      }
    });
  };

  changeTextPriceCard = (isChecked) => {
    [...this.plansCardElements].forEach((plansCardElement) => {
      const priceElement = plansCardElement.querySelector(
        "[data-js-plan-price]"
      );
      if (isChecked) {
        priceElement.textContent = `$${priceElement.textContent.slice(1, 3) * 10}/yr`
      } else {
        priceElement.textContent = `$${priceElement.textContent.slice(1, 4) / 10}/mo`
      }
    });
  }

  onSwitcherCheckboxChange = () => {
    const isChecked = this.switcherCheckboxElement.checked;

    this.switcherVariantElement_2.classList.toggle(
      this.stateClasses.switcherVarianActive,
      isChecked
    );
    this.switcherVariantElement_1.classList.toggle(
      this.stateClasses.switcherVarianActive,
      !isChecked
    );

    this.addExtraTextSwitcherCard(isChecked);
    this.changeTextPriceCard(isChecked);
  };

  onFormActionsClick = (event) => {
    const target = event.target;

    const nextButtons = document.querySelectorAll(
      this.selectors.nextStepButton
    );
    const isNextButton = [...nextButtons].some(
      (button) => button === target
    );

    const prevButtons = document.querySelectorAll(
      this.selectors.prevStepButton
    );
    const isPrevButton = [...prevButtons].some(
      (button) => button === target
    );

    if (isNextButton) {
      this.saveData();
      this.formsValidationInstance.currentStep++;
      this.formsValidationInstance.init();
    } else if (isPrevButton) {
      this.formsValidationInstance.currentStep--;
      this.formsValidationInstance.init();
    }
  };

  onPlansCardClick = (event) => {
    const plansCardElement = event.target;

    [...this.plansCardElements].forEach((plansCardElement) => {
      plansCardElement.classList.remove(
        this.stateClasses.plansCardIsSelected
      );
    });

    plansCardElement.classList.toggle(
      this.stateClasses.plansCardIsSelected
    );
  };

  saveData = () => {
    this.plansCardElements.forEach((plansCardElement) => {
      const isSelected = plansCardElement.classList.contains(
        this.stateClasses.plansCardIsSelected
      );
      if (isSelected) {
        this.data["plan-name"] = plansCardElement.dataset.planName
        this.data["plan-price"] = plansCardElement
          .querySelector("[data-js-plan-price]")
          .textContent.trim()
          .slice(
            0,
            plansCardElement
              .querySelector("[data-js-plan-price]")
              .textContent.trim()
              .indexOf("/")
          );

        this.data["plan-tarif"] = plansCardElement.querySelector(
          "[data-plan-extra]"
        )
          ? "yearly"
          : "monthly";

        this.formsValidationInstance.saveData(this.data);
        return;
      }
    });
  };

  isPressedEnter = (event) => {
    return event.key === "Enter" || event.code === "Enter";
  };

  bindEvents = () => {
    this.switcherCheckboxElement.addEventListener(
      "change",
      this.onSwitcherCheckboxChange
    );

    this.switcherToggleElement.addEventListener("keydown", (event) => {
      if (this.isPressedEnter(event)) {
        this.switcherCheckboxElement.checked =
          !this.switcherCheckboxElement.checked;
        this.onSwitcherCheckboxChange();
      }
    });

    this.formActionsElement.forEach((formActionsElement) => {
      formActionsElement.addEventListener(
        "click",
        this.onFormActionsClick
      );
    });

    this.plansCardElements.forEach((plansCardElement) => {
      plansCardElement.addEventListener("click", this.onPlansCardClick);
      plansCardElement.addEventListener("keydown", (event) => {
        if (this.isPressedEnter(event)) {
          this.onPlansCardClick(event);
        }
      });
    });
  };
}

class Step_2_Validation {}

export default FormsValidation;
