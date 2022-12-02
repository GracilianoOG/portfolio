const DISABLED_BTN_CLASS = "contact__button--disabled";
const ERROR_CLASS = "contact__field--error";
const VALID_CLASS = "contact__field--ok";
const HAS_CONTENT_CLASS = "has-content";
const MAX_FIELD_CHARACTERS = 50;
const MAX_MESSAGE_CHARACTERS = 255;
const errors = {
    currentError: "",
    valueMissing: "There are one or more empty fields.",
    tooLong: {
        smallField: `Limit of ${MAX_FIELD_CHARACTERS} characters exceeded.`,
        bigField: `Limit of ${MAX_MESSAGE_CHARACTERS} characters exceeded.`
    },
    typeMismatch: {
        emailField: "E-mail format is invalid."
    }
}

const applyValidityClass = event => {
    const field = event.target;
    chooseValidityClass(field, isFieldValid(field));
}

const isFieldValid = field => !isFieldEmpty(field) && isLengthValid(field) && isFieldTypeValid(field);

const isEveryFieldValid = fields => {
    for(let field of fields)
        if(!isFieldValid(field)) return false;
    return true;
}

const applyLabelOnTopEffect = event => {
    const field = event.target;
    const length = field.value.length;
    length > 0 ? field.classList.add(HAS_CONTENT_CLASS) : field.classList.remove(HAS_CONTENT_CLASS);
}

const isFieldEmpty = field => {
    const textLength = field.value.length;
    if(textLength <= 0) {
        errors.currentError = errors.valueMissing;
        return true;
    }
    return false;
}

const isEveryFieldEmpty = (fields, button) => {
    for(let field of fields) {
        if(isFieldEmpty(field)) {
            keepButtonEnabled(button, false);
            return;
        }
    }
    keepButtonEnabled(button, true);
}

const keepButtonEnabled = (button, isEnabled) => {
    const classes = button.classList;
    isEnabled ? classes.remove(DISABLED_BTN_CLASS) : classes.add(DISABLED_BTN_CLASS);
    button.disabled = !isEnabled;
}

const chooseValidityClass = (field, isValid) => {
    field.classList.add(isValid ? VALID_CLASS : ERROR_CLASS);
    field.classList.remove(isValid ? ERROR_CLASS : VALID_CLASS);
}

const isLengthValid = field => {
    const textLength = field.value.length;
    if(field.id === "email") {
        return true;
    }
    if(field.id === "message" && textLength > MAX_MESSAGE_CHARACTERS) {
        errors.currentError = errors.tooLong.bigField;
        return false;
    }
    if(textLength > MAX_FIELD_CHARACTERS) {
        errors.currentError = errors.tooLong.smallField;
        return false;
    }
    return true;
}

const isFieldTypeValid = field => {
    if(field.id === "email") return validateEmail(field);
    return true;
}

const validateEmail = field => {
    const validity = field.validity.typeMismatch;
    if(validity) errors.currentError = errors.typeMismatch.emailField;
    return !validity;
}

export const formValidation = {
    errors,
    applyValidityClass,
    isEveryFieldValid,
    applyLabelOnTopEffect,
    isEveryFieldEmpty
}