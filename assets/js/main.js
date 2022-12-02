import { formValidation as fv } from "./formValidation.js";
import { formHandling as fh } from "./formHandling.js";

const contactButton = document.querySelector(".contact__button");
const contactError = document.querySelector(".contact__error");
const contactFeedback = document.querySelector(".contact__feedback");
const contactFields = document.querySelectorAll(".contact__field");
const form = document.querySelector(".contact__form");

const clearFields = () => contactFields.forEach(field => field.value = "");
window.onload = clearFields;

const showFeedback = () => {
    contactFeedback.classList.add("contact__feedback--show");
}

const closeFeedback = () => {
    contactFeedback.classList.remove("contact__feedback--show");
}

const resetFields = () => {
    clearFields();
    contactFields.forEach(field => {
        field.focus();
        field.blur();
        field.classList.remove("contact__field--error");
    })
}

contactFeedback.addEventListener("click", closeFeedback);

contactFields.forEach(field => field.addEventListener("blur", event => {
    fv.applyLabelOnTopEffect(event);
    fv.applyValidityClass(event);
}));

form.addEventListener("keyup", () => fv.isEveryFieldEmpty(contactFields, contactButton));
-
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