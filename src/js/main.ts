import { submitForm } from "./formHandling.js";
import { applyValidityStyle, validateForm } from "./formValidations.js";

import "./customThemes.js";
import "./projectCards.js";
import "./hamburger.js";
import "./backToTop.js";
import "./scrollEffects.js";

import "../scss/main.scss";

const contactButton = document.querySelector(".contact__button");
const contactError = document.querySelector(".contact__error");
const contactFeedback = document.querySelector(".contact__feedback");
const contactFields = document.querySelectorAll(".contact__field");
const contactForm = document.querySelector(".contact__form");
const footerDate = document.querySelector(".footer__date");

const setFooterDate = () => {
  footerDate.textContent = String(new Date().getFullYear());
};

const toggleFeedbackModal = (force) => {
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

const handleFormSubmit = (event) => {
  event.preventDefault();

  const [isFormValid, errors] = validateForm();

  if (!isFormValid) {
    contactError.innerHTML = errors;
    return;
  }

  const values = [...contactFields].map((field) => field.value.trim());
  submitForm(...values);

  toggleFeedbackModal(true);
  resetFormState();

  contactError.innerHTML = "";
};

const handleFieldBlur = ({ target }) => {
  applyValidityStyle(target);
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
