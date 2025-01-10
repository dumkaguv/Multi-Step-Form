import FormStepsController from "./FormStepsController.js";
import FormsValidation from "./FormsValidation.js"

document.addEventListener("DOMContentLoaded", () => {
  const formStepsController = new FormStepsController();
  new FormsValidation(formStepsController)
});
