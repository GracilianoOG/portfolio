import { submitForm } from "./formHandling.js";
import { setupThemeToggler } from "./customThemes.js";
import "./hamburger.js";
import "./backToTop.js";
import "../scss/main.scss";
import {
  applyValidityStyle,
  keepLabelOnTop,
  validateForm,
} from "./formValidations.js";

// Variables to work with forms
const contactButton = document.querySelector(".contact__button");
const contactError = document.querySelector(".contact__error");
const contactFeedback = document.querySelector(".contact__feedback");
const contactFields = document.querySelectorAll(".contact__field");

// Clear all input fields
const clearFields = () => contactFields.forEach(field => (field.value = ""));
window.onload = clearFields;

// Manipulate the feedback modal
const showFeedback = () => {
  contactFeedback.classList.add("contact__feedback--show");
};

const closeFeedback = () => {
  contactFeedback.classList.remove("contact__feedback--show");
};

// Reset all the styles of the fields
const resetFields = () => {
  clearFields();
  contactFields.forEach(field => {
    field.classList.remove("contact__field--ok");
    field.classList.remove("has-content");
  });
};

// Closable contact modal
contactFeedback.addEventListener("click", closeFeedback);

// Add classes on the fields
contactFields.forEach(field =>
  field.addEventListener("blur", () => {
    keepLabelOnTop(field);
    applyValidityStyle(field);
  })
);

// Show a message after submiting the form
contactButton.addEventListener("click", event => {
  event.preventDefault();
  const [isFormValid, errors] = validateForm();
  if (isFormValid) {
    const values = [];
    contactFields.forEach(field => values.push(field.value));
    submitForm(...values);
    showFeedback();
    resetFields();
    contactError.innerHTML = "";
    return;
  }
  contactError.innerHTML = errors;
});

setupThemeToggler();
