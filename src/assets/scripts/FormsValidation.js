const root = "[data-js-form]";

String.prototype.toCapitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

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
    3: Step_3_Validation,
    4: LastStep,
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

    if (this.stepLabelElements) {
      this.stepLabelElements.forEach((element, indexElement, labels) => {
        const isCurrentStep = this.currentStep === indexElement;
        if (isCurrentStep) {
          element.classList.toggle(this.stateClasses.stepLabelActive, isCurrentStep);
        }
      });
    }
  };
}

class FormActionsButtons {
  selectors = {
    formActions: "[data-js-form-actions]",
    nextStepButton: "[data-js-form-actions-next]",
    prevStepButton: "[data-js-form-actions-prev]",
  };

  constructor(stepInstance) {
    this.stepInstance = stepInstance;
    this.formActionsElement = document.querySelector(this.selectors.formActions);
    this.bindEvents();
  }

  bindEvents = () => {
    this.formActionsElement.addEventListener("click", this.onFormActionsClick);
  };

  onFormActionsClick = (event) => {
    if (this.stepInstance?.onFormActionsClick) {
      this.stepInstance.onFormActionsClick();
      return;
    }
    const target = event.target;

    const nextButtons = document.querySelectorAll(this.selectors.nextStepButton);
    const isNextButton = [...nextButtons].some((button) => button === target);

    const prevButtons = document.querySelectorAll(this.selectors.prevStepButton);
    const isPrevButton = [...prevButtons].some((button) => button === target);

    if (isNextButton) {
      if (this.stepInstance.saveData) {
        this.stepInstance.saveData();
      }

      this.stepInstance.formsValidationInstance.currentStep++;
      this.stepInstance.formsValidationInstance.init();
    } else if (isPrevButton) {
      this.stepInstance.formsValidationInstance.currentStep--;
      this.stepInstance.formsValidationInstance.init();
    }
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
    this.formActionsElement = document.querySelector(this.selectors.formActions);
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
      return this.manageErrors(fieldElement, this.errorMessages.valueMissing);
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

    const errorFieldElement = fieldElement.querySelector(this.selectors.fieldErrors);
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
    const nextButtons = document.querySelectorAll(this.selectors.nextStepButton);
    const isNextButton = [...nextButtons].some((button) => button === target);

    if (isNextButton) {
      let isFormValid = true;
      let firstInvalidFieldControl = null;
      const requiredControlElements = [...this.fieldControlElements].filter(
        ({ required }) => required
      );

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
    this.formActionsElement.addEventListener("click", this.onFormActionsClick);
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
    plansPrice: "[data-js-plan-price]",
    plansExtra: "[data-plan-extra]",
  };

  stateClasses = {
    switcherVarianActive: "switcher__variant--active",
    plansCardIsSelected: "is-selected",
  };

  constructor(formsValidationInstance) {
    this.formsValidationInstance = formsValidationInstance;
    this.rootElement = document.querySelector(root);

    this.switcherElement = this.rootElement.querySelector(this.selectors.switcher);
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
      const priceElement = plansCardElement.querySelector("[data-js-plan-price]");
      if (isChecked) {
        priceElement.textContent = `$${
          priceElement.textContent.slice(1, 3) * 10
        }/yr`;
      } else {
        priceElement.textContent = `$${
          priceElement.textContent.slice(1, 4) / 10
        }/mo`;
      }
    });
  };

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

  onPlansCardClick = (event) => {
    const plansCardElement = event.target;

    [...this.plansCardElements].forEach((plansCardElement) => {
      plansCardElement.classList.remove(this.stateClasses.plansCardIsSelected);
    });

    plansCardElement.classList.toggle(this.stateClasses.plansCardIsSelected);
  };

  saveData() {
    const planCards = document.querySelectorAll(this.selectors.plansCard);

    planCards.forEach((planCard) => {
      const isSelected = planCard.classList.contains(
        this.stateClasses.plansCardIsSelected
      );
      if (isSelected) {
        this.data["plan-name"] = planCard.dataset.planName;

        const priceElement = planCard.querySelector(this.selectors.plansPrice);
        const rawPriceText = priceElement?.textContent.trim() || "";
        const price = rawPriceText.slice(
          0,
          rawPriceText.indexOf("/") || rawPriceText.length
        );
        this.data["plan-price"] = price;

        this.data["plan-tarif"] = planCard.querySelector(this.selectors.plansExtra)
          ? "yearly"
          : "monthly";

        this.formsValidationInstance.saveData(this.data);
      }
    });
  }

  isPressedEnter = (event) => {
    return event.key === "Enter" || event.code === "Enter";
  };

  bindEvents = () => {
    new FormActionsButtons(this);

    this.switcherCheckboxElement.addEventListener(
      "change",
      this.onSwitcherCheckboxChange
    );

    this.switcherToggleElement.addEventListener("keydown", (event) => {
      if (this.isPressedEnter(event)) {
        this.switcherCheckboxElement.checked = !this.switcherCheckboxElement.checked;
        this.onSwitcherCheckboxChange();
      }
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

class Step_2_Validation {
  selectors = {
    addonsCard: "[data-js-addons-card]",
    addonsPrice: "[data-js-addons-price]",
    addonsTitle: "[data-js-addons-title]",
  };

  addonsPrices = {
    onlineService: {
      mo: "+1$/mo",
      yr: "+10$/yr",
    },
    largerStorage: {
      mo: "+2$/mo",
      yr: "+20$/yr",
    },
    customizableProfile: {
      mo: "+3$/mo",
      yr: "+30$/yr",
    },
  };

  stateClasses = {
    isSelected: "is-selected",
  };

  constructor(formsValidationInstance) {
    this.formsValidationInstance = formsValidationInstance;
    this.rootElement = document.querySelector(root);
    this.data = {};
    this.data.addons = [];
    this.addonsCardElements = this.rootElement.querySelectorAll(
      this.selectors.addonsCard
    );

    this.bindEvents();
    this.renderAddonsPrice();
  }

  renderAddonsPrice = () => {
    const isMonthlyTarif =
      this.formsValidationInstance.data["plan-tarif"] === "monthly";

    const getPriceByTarif = (addonsCardElement) => {
      const currentTarif = isMonthlyTarif ? "mo" : "yr";
      const addonsCardName = addonsCardElement
        .querySelector(this.selectors.addonsTitle)
        .dataset.jsAddonsTitle.trim();
      const priceTemplate = `${this.addonsPrices[addonsCardName][currentTarif]}`;
      const tarifPriceElement = addonsCardElement.querySelector(
        this.selectors.addonsPrice
      );

      tarifPriceElement.textContent = priceTemplate;
    };

    this.addonsCardElements.forEach((addonsCardElement) => {
      getPriceByTarif(addonsCardElement);
    });
  };

  onAddonsCardClick = (event) => {
    const addonsCardElement = event.target.closest(this.selectors.addonsCard);
    const isCheckbox = event.target.tagName === "INPUT";

    if (!addonsCardElement || isCheckbox) {
      addonsCardElement.classList.toggle(this.stateClasses.isSelected);
    }
  };

  saveData = () => {
    [...this.addonsCardElements]
      .filter((element) => {
        const isSelected = element.classList.contains(this.stateClasses.isSelected);
        return isSelected;
      })
      .forEach((element) => {
        const elementTextContent = element.querySelector(
          this.selectors.addonsTitle
        ).textContent;
        const elementPrice = element.querySelector(
          this.selectors.addonsPrice
        ).textContent;
        const obj = { name: elementTextContent, price: elementPrice };
        this.data.addons.push(obj);
      });
    this.formsValidationInstance.saveData(this.data);
  };

  bindEvents = () => {
    new FormActionsButtons(this);
    this.addonsCardElements.forEach((addonsCardElement) => {
      addonsCardElement.addEventListener("click", this.onAddonsCardClick);
    });
  };
}

class Step_3_Validation {
  selectors = {
    summaryTotal: "[data-js-summary-total]",
    summaryTotalTitle: "[data-js-summary-total-title]",
    summaryTotalPrice: "[data-js-summary-total-price]",
    changePlanButton: "[data-js-plan-change-button]",
  };

  constructor(formsValidationInstance) {
    this.formsValidationInstance = formsValidationInstance;
    this.rootElement = document.querySelector(root);
    this.data = {};

    this.init();
    this.bindEvents();
  }

  init = () => {
    this.renderSummaryDetails();
    this.renderTotalPrice();
    this.changePlanButtonElement = document.querySelector(
      this.selectors.changePlanButton
    );
  };

  renderSummaryDetails = () => {
    this.summaryTotalElement = this.rootElement.querySelector(
      this.selectors.summaryTotal
    );
    const planName = this.formsValidationInstance.data["plan-name"];
    const planPrice = this.formsValidationInstance.data["plan-price"];
    const planTarif = this.formsValidationInstance.data["plan-tarif"];

    const planNameEdited = `${planName?.toCapitalize()} (${planTarif?.toCapitalize()})`;
    const planPriceEdited = `${planPrice}/${planTarif === "monthly" ? "mo" : "yr"}`;

    this.summaryTotalElement.insertAdjacentHTML(
      "beforebegin",
      this.getSummaryInnerHTML(planNameEdited, planPriceEdited)
    );
  };

  renderTotalPrice = () => {
    const summaryTitleElement = this.summaryTotalElement.querySelector(
      this.selectors.summaryTotalTitle
    );
    const summaryPriceElement = this.summaryTotalElement.querySelector(
      this.selectors.summaryTotalPrice
    );

    const planTarif = this.formsValidationInstance.data["plan-tarif"];
    const planPrice = parseInt(
      this.formsValidationInstance.data["plan-price"].slice(1)
    );
    const addonsTotalPrice = this.formsValidationInstance.data.addons.reduce(
      (sum, addon) => sum + parseInt(addon.price.slice(1)),
      0
    );

    const planTarifText = planTarif === "monthly" ? "mo" : "yr";
    summaryPriceElement.textContent = `$+${
      planPrice + addonsTotalPrice
    }/${planTarifText}`;
    summaryTitleElement.textContent = `Total (per ${
      planTarif === "monthly" ? "month" : "year"
    })`;
  };

  onChangePlanButtonClick = () => {
    this.formsValidationInstance.currentStep = 1;
    this.formsValidationInstance.init();
  };

  bindEvents = () => {
    new FormActionsButtons(this);
    this.changePlanButtonElement.addEventListener(
      "click",
      this.onChangePlanButtonClick
    );
  };

  getSummaryInnerHTML = (plan = "Arcade (Monthly)", planPrice = "$0/mo") => {
    return `
      <div class="summary__inner">
        <div class="summary__header">
          <div class="summary__plan">
            <span class="summary__plan-title">${plan}</span>
            <button type="button" class="summary__plan-button" data-js-plan-change-button>
              Change
            </button>
          </div>
          <span class="summary__header-price">${planPrice}</span>
        </div>
        ${this.renderSummaryAddons() ? this.renderSummaryAddons() : ""}
      </div>
    `;
  };

  renderSummaryAddons = () => {
    const addons = this.formsValidationInstance.data.addons;
    if (!addons || addons.length === 0) {
      return;
    }

    const addonsHTML = addons
      .map((item) => {
        const { name, price } = item;
        return getAddonHTML(name, price);
      })
      .join("");

    return `
    <ul class="summary__list">
      ${addonsHTML}
    </ul>
  `;

    function getAddonHTML(name, price) {
      return `
        <li class="summary__item">
          <span class="summary__item-title">${name}</span>
          <span class="summary__item-price">${price}</span>
        </li>
      `;
    }
  };
}

class LastStep {
  constructor(formsValidationInstance) {
    this.formsValidationInstance = formsValidationInstance;
    this.rootElement = document.querySelector(root);

    this.init();
  }

  init = () => {
    console.log("Last Step");
  };
}

export default FormsValidation;
