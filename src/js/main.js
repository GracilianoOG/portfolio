import { submitForm } from "./formHandling.js";
import "./customThemes.js";
import "./hamburger.js";
import "./backToTop.js";
import "../scss/main.scss";
import { applyValidityStyle, validateForm } from "./formValidations.js";

// Variables to work with forms
const contactButton = document.querySelector(".contact__button");
const contactError = document.querySelector(".contact__error");
const contactFeedback = document.querySelector(".contact__feedback");
const contactFields = document.querySelectorAll(".contact__field");
const contactForm = document.querySelector(".contact__form");
const footerDate = document.querySelector(".footer__date");

// Set current year on footer
footerDate.textContent = new Date().getFullYear();

// Clear all input fields
const clearFields = () => contactForm.reset();
window.onload = clearFields;

// Manipulate the feedback modal
const toggleModal = force => {
  contactFeedback.classList.toggle("contact__feedback--show", force);
};

// Reset all the styles of the fields
const resetFields = () => {
  clearFields();
  contactFields.forEach(field => field.classList.remove("contact__field--ok"));
};

// Closable contact modal
contactFeedback.addEventListener("click", () => toggleModal(false));

// Add classes on the fields
contactFields.forEach(field =>
  field.addEventListener("blur", () => applyValidityStyle(field))
);

// Show a message after submiting the form
contactButton.addEventListener("click", event => {
  event.preventDefault();
  const [isFormValid, errors] = validateForm();
  if (isFormValid) {
    const values = [];
    contactFields.forEach(field => values.push(field.value.trim()));
    submitForm(...values);
    toggleModal(true);
    resetFields();
    contactError.innerHTML = "";
    return;
  }
  contactError.innerHTML = errors;
});
