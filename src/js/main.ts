import { submitForm } from "./formHandling";
import {
  applyValidityStyle,
  validateForm,
  type FormField,
} from "./formValidations";

import "./customThemes";
import "./projectCards";
import "./hamburger";
import "./backToTop";
import "./scrollEffects";

import "../scss/main.scss";

const contactButton =
  document.querySelector<HTMLButtonElement>(".contact__button")!;
const contactError = document.querySelector<HTMLDivElement>(".contact__error")!;
const contactFeedback =
  document.querySelector<HTMLDivElement>(".contact__feedback")!;
const contactFields = document.querySelectorAll<FormField>(".contact__field")!;
const contactForm = document.querySelector<HTMLFormElement>(".contact__form")!;
const footerDate =
  document.querySelector<HTMLParagraphElement>(".footer__date")!;

const setFooterDate = () => {
  footerDate.textContent = String(new Date().getFullYear());
};

const toggleFeedbackModal = (force: boolean) => {
  contactFeedback.classList.toggle("contact__feedback--show", force);
};

const clearFieldStyles = () => {
  contactFields.forEach((field) =>
    field.classList.remove("contact__field--ok"),
  );
};

const resetFormState = () => {
  clearFieldStyles();
  contactForm.reset();
};

const handleFormSubmit = (event: PointerEvent) => {
  event.preventDefault();

  const [isFormValid, errors] = validateForm();

  if (!isFormValid) {
    contactError.innerHTML = errors as string;
    return;
  }

  type SubmitValues = [string, string, string, string];

  const values = [...contactFields].map((field) =>
    field.value.trim(),
  ) as SubmitValues;
  submitForm(...values);

  toggleFeedbackModal(true);
  resetFormState();

  contactError.innerHTML = "";
};

const handleFieldBlur = ({ currentTarget }: Event) => {
  const field = currentTarget;
  applyValidityStyle(field as FormField);
};

contactFeedback.addEventListener("animationend", () =>
  toggleFeedbackModal(false),
);

contactFields.forEach((field) =>
  field.addEventListener("blur", handleFieldBlur),
);

contactButton.addEventListener("click", handleFormSubmit);

setFooterDate();
resetFormState();
