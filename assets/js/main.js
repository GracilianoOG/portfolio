import { formValidation as fv } from "./formValidation.js";
import { formHandling as fh } from "./formHandling.js";

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
    fv.applyLabelOnTopEffect(event);
    fv.applyValidityClass(event);
}));

form.addEventListener("keyup", () => fv.isEveryFieldEmpty(contactFields, contactButton));

contactButton.addEventListener("click", event => {
    event.preventDefault();
    if(fv.isEveryFieldValid(contactFields)) {
        const values = [];
        contactFields.forEach(field => values.push(field.value));
        fh.submitForm(...values);
        resetFields();
        contactError.innerHTML = "";
        return;
    }
    contactError.innerHTML = fv.errors.currentError;
});