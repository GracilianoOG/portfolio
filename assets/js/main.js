import { customValidation as cv } from "./formValidation.js";

const contactButton = document.querySelector(".contact__button");
const contactError = document.querySelector(".contact__error");
const contactFields = document.querySelectorAll(".contact__field");
const form = document.querySelector(".contact__form");

window.onload = contactFields.forEach(field => field.value = "");

contactFields.forEach(field => field.addEventListener("blur", event => {
  cv.applyLabelOnTopEffect(event);
  cv.applyValidityClass(event);
}));

form.addEventListener("keyup", () => cv.isEveryFieldEmpty(contactFields, contactButton));

contactButton.addEventListener("click", event => {
    if(cv.isEveryFieldValid(contactFields)) {
        contactError.innerHTML = "";
    } else {
        event.preventDefault();
        contactError.innerHTML = cv.errors.currentError;
    }
});