import { customValidation as cv } from "./formValidation.js";

const contactButton = document.querySelector(".contact__button");
const contactError = document.querySelector(".contact__error");
const contactFields = document.querySelectorAll(".contact__field");
const form = document.querySelector(".contact__form");

const clearFields = () => contactFields.forEach(field => field.value = "");
window.onload = clearFields;

const resetFields = () => {
    clearFields();
    contactFields.forEach(field => {
        field.focus();
        field.blur();
        field.classList.remove("contact__field--error");
    })
}

contactFields.forEach(field => field.addEventListener("blur", event => {
  cv.applyLabelOnTopEffect(event);
  cv.applyValidityClass(event);
}));

form.addEventListener("keyup", () => cv.isEveryFieldEmpty(contactFields, contactButton));

contactButton.addEventListener("click", event => {
    event.preventDefault();
    if(cv.isEveryFieldValid(contactFields)) {
        const values = [];
        contactFields.forEach(field => values.push(field.value));
        cv.submitForm(...values);
        resetFields();
        contactError.innerHTML = "";
        return;
    }
    contactError.innerHTML = cv.errors.currentError;
});