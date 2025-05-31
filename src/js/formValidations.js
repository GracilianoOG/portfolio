const fields = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  subject: document.querySelector("#subject"),
  message: document.querySelector("#message"),
};

const validateFields = () => {
  const validations = {
    name: [
      {
        valid: !fields.name.validity.valueMissing,
        message: "Name input is empty",
      },
      {
        valid: !fields.name.validity.tooLong,
        message: "Name input is too long",
      },
    ],
    email: [
      {
        valid: !fields.email.validity.valueMissing,
        message: "Email input is empty",
      },
      {
        valid: !fields.email.validity.typeMismatch,
        message: "Provide a valid email format",
      },
    ],
    subject: [
      {
        valid: !fields.subject.validity.valueMissing,
        message: "Subject input is empty",
      },
      {
        valid: !fields.subject.validity.tooLong,
        message: "Subject input is too long",
      },
    ],
    message: [
      {
        valid: !fields.message.validity.valueMissing,
        message: "Message input is empty",
      },
      {
        valid: !fields.message.validity.tooLong,
        message: "Message input is too long",
      },
    ],
  };

  return validations;
};

const isFieldValid = name => {
  const validations = validateFields();
  return validations[name].every(({ valid }) => valid);
};

export const applyValidityStyle = field => {
  const isValid = isFieldValid(field.name);
  const ERROR_CLASS = "contact__field--error";
  const VALID_CLASS = "contact__field--ok";
  field.classList.add(isValid ? VALID_CLASS : ERROR_CLASS);
  field.classList.remove(isValid ? ERROR_CLASS : VALID_CLASS);
};

export const validateForm = () => {
  const validations = validateFields();
  const validation = [true, ""];

  Object.entries(validations).forEach(field => {
    field[1].forEach(({ valid, message }) => {
      if (!valid) {
        validation[0] = false;
        validation[1] += `<p>${message}!</p>`;
        applyValidityStyle(fields[field[0]]);
      }
    });
  });

  return validation;
};
