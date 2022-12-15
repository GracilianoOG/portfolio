// Form imports
import { validation as fv } from "./formValidation.js";
import { handling as fh } from "./formHandling.js";

// Theme toggler import
import toggleTheme from "./customThemes.js";

// Variables to work with forms
const contactButton = document.querySelector(".contact__button");
const contactError = document.querySelector(".contact__error");
const contactFeedback = document.querySelector(".contact__feedback");
const contactFields = document.querySelectorAll(".contact__field");
const form = document.querySelector(".contact__form");

// Variables to work with theme toggling
const themeToggler = document.querySelector(".theme-toggler");

// Variables to work with the hamburguer menu
const hamburguer = document.querySelector(".header__hamburguer");
const headerMenu = document.querySelector(".header__menu");

// Clear all input fields
const clearFields = () => contactFields.forEach(field => field.value = "");
window.onload = clearFields;

// Manipulate the feedback modal
const showFeedback = () => {
    contactFeedback.classList.add("contact__feedback--show");
}

const closeFeedback = () => {
    contactFeedback.classList.remove("contact__feedback--show");
}

// Reset all the styles of the fields
const resetFields = () => {
    clearFields();
    contactFields.forEach(field => {
        field.focus();
        field.blur();
        field.classList.remove("contact__field--error");
    })
}

// Closable contact modal
contactFeedback.addEventListener("click", closeFeedback);

// Add classes on the fields
contactFields.forEach(field => field.addEventListener("blur", event => {
    fv.applyLabelOnTopEffect(event);
    fv.applyValidityClass(event);
}));

// Disable submit button if it's empty
form.addEventListener("keyup", () => fv.isEveryFieldEmpty(contactFields, contactButton));

// Show a message after submiting the form
contactButton.addEventListener("click", event => {
    event.preventDefault();
    if(fv.isEveryFieldValid(contactFields)) {
        const values = [];
        contactFields.forEach(field => values.push(field.value));
        fh.submitForm(...values);
        showFeedback();
        resetFields();
        contactError.innerHTML = "";
        return;
    }
    contactError.innerHTML = fv.errors.currentError;
});

// Theme Switcher
themeToggler.addEventListener("click", toggleTheme);

// Hamburguer Menu
hamburguer.addEventListener("click", () => headerMenu.classList.toggle("header__menu--off"));