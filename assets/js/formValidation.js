const contactButton = document.querySelector(".contact__button");
const contactError = document.querySelector(".contact__error");
const contactFields = document.querySelectorAll(".contact__field");
const form = document.querySelector(".contact__form");

const DISABLED_BTN_CLASS = "contact__button--disabled";
const ERROR_CLASS = "contact__field--error";
const VALID_CLASS = "contact__field--ok";
const HAS_CONTENT_CLASS = "has-content";
const MAX_FIELD_CHARACTERS = 50;
const MAX_MESSAGE_CHARACTERS = 300;
const errors = {
    currentError: "",
    emptyFieldError: "There are one or more empty fields.",
    charLimitExcedeedError: {
        smallField: "Limit of 50 characters exceeded.",
        bigField: "Limit of 300 characters exceeded."
    },
    fieldFormatError: {
        emailField: "E-mail format is invalid."
    }
}

window.onload = contactFields.forEach(field => field.value = "");

const applyValidityClass = event => {
    const field = event.target;
    isFieldValid(field) ? applyValidClass(field) : applyInvalidClass(field);
}

const isFieldValid = field => !isFieldEmpty(field) && isLengthValid(field) && isFieldTypeValid(field);

const isEveryFieldValid = fields => {
    for(let i = 0; i < fields.length; i++)
        if(!isFieldValid(fields[i]))
            return false;
    return true;
}

const coolEffect = event => {
    const field = event.target;
    const fieldLength = field.value.length;
    fieldLength > 0 ? field.classList.add(HAS_CONTENT_CLASS) : field.classList.remove(HAS_CONTENT_CLASS);
}

contactFields.forEach(field => field.addEventListener("blur", event => {
    coolEffect(event);
    applyValidityClass(event);
}));

const isFieldEmpty = field => {
    const textLength = field.value.length;
    if(textLength <= 0) {
        errors.currentError = errors.emptyFieldError;
        return true;
    }
    return false;
}

const isEveryFieldEmpty = fields => {
    for(let i = 0; i < fields.length; i++) {
        if(isFieldEmpty(fields[i])) {
            disableButton();
            return;
        }
    }
    enableButton();
}

form.addEventListener("keyup", () => isEveryFieldEmpty(contactFields));

contactButton.addEventListener("click", event => {
    if(isEveryFieldValid(contactFields)) {
        event.preventDefault();
        contactError.innerHTML = "Enviando formulário...";
    } else {
        event.preventDefault();
        contactError.innerHTML = errors.currentError;
    }
});

const enableButton = () => {
    contactButton.classList.remove(DISABLED_BTN_CLASS);
    contactButton.disabled = false;
}

const disableButton = () => {
    contactButton.classList.add(DISABLED_BTN_CLASS);
    contactButton.disabled = true;
}

const applyValidClass = field => {
    field.classList.add(VALID_CLASS);
    field.classList.remove(ERROR_CLASS);
}

const applyInvalidClass = field => {
    field.classList.add(ERROR_CLASS);
    field.classList.remove(VALID_CLASS);
}

const isLengthValid = field => {
    const textLength = field.value.length;
    if(field.id !== "message" && textLength > MAX_FIELD_CHARACTERS) {
        errors.currentError = errors.charLimitExcedeedError.smallField;
        return false;
    }
    if(textLength > MAX_MESSAGE_CHARACTERS) {
        errors.currentError = errors.charLimitExcedeedError.bigField;
        return false;
    }
    return true;
}

const isFieldTypeValid = field => {
    if(field.id === "email") return validateEmail(field);
    return true;
}

const validateField = (field, pattern) => pattern.test(field.value);

const validateEmail = field => {
    const pattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;
    const validity = validateField(field, pattern);
    if(!validity) errors.currentError = errors.fieldFormatError.emailField;
    return validity;
}