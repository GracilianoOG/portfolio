const contactButton = document.querySelector(".contact__button");
const contactFields = document.querySelectorAll(".contact__field");
const form = document.querySelector(".contact__form");
const disabledButtonClass = "contact__button--disabled";
const errorClass = "contact__field--error";
const okClass = "contact__field--ok";
const MAX_FIELD_CHARACTERS = 50;
const MAX_MESSAGE_CHARACTERS = 300;

const checkIfTheFieldIsValid = (event) => {
    const field = event.target;
    if(isTheFieldValid(field)) {
        applyValidClass(field);
    } else {
        applyInvalidClass(field);
    }
}

function isTheFieldValid(field) {
    return (!isTheFieldEmpty(field) && isTheLengthValid(field) && isTheFieldTypeValid(field));
}

function isEveryFieldValid() {
    for(let i = 0; i < contactFields.length; i++)
        if(!isTheFieldValid(contactFields[i]))
            return false;
    return true;
}

contactFields.forEach((field) => {
    field.addEventListener("blur", checkIfTheFieldIsValid);
});

function isTheFieldEmpty(field) {
    const textLength = field.value.length;
    if(textLength < 1) {
        console.log("This field cannot be empty.");
        return true;
    }
    return false;
}

function isEveryFieldEmpty() {
    for(let i = 0; i < contactFields.length; i++) {
        if(isTheFieldEmpty(contactFields[i])) {
            disableButton();
            return;
        }
    }
    enableButton();
}

form.addEventListener("keyup", isEveryFieldEmpty);

contactButton.addEventListener("click", (event) => {
    if(isEveryFieldValid()) {
        alert("Submitted!");
    } else {
        event.preventDefault();
        alert("Error!");
    }
});

function enableButton() {
    contactButton.classList.remove(disabledButtonClass);
    contactButton.disabled = false;
}

function disableButton() {
    contactButton.classList.add(disabledButtonClass);
    contactButton.disabled = true;
}

function applyValidClass(field) {
    field.classList.add(okClass);
    field.classList.remove(errorClass);
}

function applyInvalidClass(field) {
    field.classList.add(errorClass);
    field.classList.remove(okClass);
}

function isTheLengthValid(field) {
    const textLength = field.value.length;
    if(field.id != "message" && textLength > MAX_FIELD_CHARACTERS) {
        console.log("Limit of 50 characters exceeded.");
        return false;
    }
    if(textLength > MAX_MESSAGE_CHARACTERS) {
        console.log("Limit of 300 characters exceeded.");
        return false;
    }
    return true;
}

function isTheFieldTypeValid(field) {
    if(field.id == "email") {
        return validateEmail(field);
    }
    return true;
}

function validateField(field, pattern) {
    const fieldText = field.value;
    const regExp = pattern;
    if(fieldText.match(regExp)) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(field) {
    const pattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;
    return validateField(field, pattern);
}