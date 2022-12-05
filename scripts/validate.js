const showInputError = (elementValidation, form, inputElement, errorMessage) => {
  const errorClass = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(elementValidation.inputErrorClass);
  errorClass.textContent = errorMessage;
};

const hideInputError = (elementValidation, form, inputElement) => {
  const errorClass = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(elementValidation.inputErrorClass);
  errorClass.textContent = '';
};

const isValid = (elementValidation, form, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(elementValidation, form, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(elementValidation, form, inputElement);
  }
};

const hasInvalidInput = (forms) => {
  return forms.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (formInputs, button) => {
  if (hasInvalidInput(formInputs)) {
    button.setAttribute('disabled', true);
  } else {
    button.removeAttribute('disabled', true);
  }
};

const setEventListeners = (elementValidation, form) => {
  const formInputs = Array.from(form.querySelectorAll(elementValidation.inputSelector));
  const button = form.querySelector(elementValidation.submitButtonSelector);

  

  formInputs.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(elementValidation, form, inputElement);
      toggleButtonState(formInputs, button);
    });
  });
};

const enableValidation = (elementValidation) => {
  const forms = Array.from(document.querySelectorAll(elementValidation.formSelector));
  forms.forEach((form) => {
    setEventListeners(elementValidation, form);
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_el_save',
  inputErrorClass: 'form__input_el_error'
}); 