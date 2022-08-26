const contactFields = document.querySelectorAll(".contact__field");
const errorClass = "contact__field--error";
const okClass = "contact__field--ok";
const MAX_FIELD_CHARACTERS = 50;
const MAX_MESSAGE_CHARACTERS = 300;

const validateField = (event) => {
    const field = event.target;
    if(checkIfFieldIsEmpty(field) || checkFieldLength(field) || checkFieldFormat(field)) {
        invalidField(field);
    } else {
        validField(field);
    }
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

contactFields.forEach((field) => {
    field.addEventListener("blur", validateField);
});