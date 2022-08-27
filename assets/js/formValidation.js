const contactButton = document.querySelector(".contact__button");
const contactFields = document.querySelectorAll(".contact__field");
const form = document.querySelector(".contact__form");
const disableButtonClass = "contact__button--disabled";
const errorClass = "contact__field--error";
const okClass = "contact__field--ok";
const MAX_FIELD_CHARACTERS = 50;
const MAX_MESSAGE_CHARACTERS = 300;

const validateField = (event) => {
    const field = event.target;
    if(checkIfFieldIsValid(field)) {
        invalidField(field);
    } else {
        validField(field);
    }
}

function checkIfFieldIsValid(field) {
    return (checkIfFieldIsEmpty(field) || checkFieldLength(field) || checkFieldFormat(field));
}

function checkIfEveryFieldIsValid() {
    for(let i = 0; i < contactFields.length; i++)
        if(checkIfFieldIsValid(contactFields[i]))
            return true;
    return false;
}

contactFields.forEach((field) => {
    field.addEventListener("blur", validateField);
});

function checkIfEveryFieldIsEmpty() {
    for(let i = 0; i < contactFields.length; i++) {
        if(checkIfFieldIsEmpty(contactFields[i])) {
            disableButton();
            return;
        }
    }
    enableButton();
}

form.addEventListener("keyup", checkIfEveryFieldIsEmpty);

contactButton.addEventListener("click", (event) => {
    if(checkIfEveryFieldIsValid()) {
        event.preventDefault();
        alert("Error!");
    } else {
        alert("Submitted!");
    }
});

function enableButton() {
    contactButton.classList.remove(disableButtonClass);
    contactButton.disabled = false;
}

function disableButton() {
    contactButton.classList.add(disableButtonClass);
    contactButton.disabled = true;
}

function validField(field) {
    field.classList.add(okClass);
    field.classList.remove(errorClass);
}

function invalidField(field) {
    field.classList.add(errorClass);
    field.classList.remove(okClass);
}

function checkIfFieldIsEmpty(field) {
    const textLength = field.value.length;
    if(textLength < 1) {
        console.log("This field cannot be empty.");
        return true;
    }
}

function checkFieldLength(field) {
    const textLength = field.value.length;
    if(field.id != "message" && textLength > MAX_FIELD_CHARACTERS) {
        console.log("Limit of 50 characters exceeded.");
        return true;
    }
    if(textLength > MAX_MESSAGE_CHARACTERS) {
        console.log("Limit of 300 characters exceeded.");
        return true;
    }
}

function checkFieldFormat(field) {
    if(field.id == "email") {
        return validateEmail(field);
    }
    return false;
}

function validation(field, pattern) {
    const fieldText = field.value;
    const regExp = pattern;
    if(fieldText.match(regExp)) {
        return false;
    } else {
        return true;
    }
}

function validateEmail(field) {
    const pattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;
    return validation(field, pattern);
}