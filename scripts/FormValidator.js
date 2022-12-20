class FormValidator {
  constructor(elementValidation, popup) {
    this._formSelector = elementValidation.formSelector;
    this._inputSelector = elementValidation.inputSelector;
    this._submitButtonSelector = elementValidation.submitButtonSelector;
    this._inputErrorClass = elementValidation.inputErrorClass;
    this._popup = popup;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorClass = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorClass.textContent = errorMessage;
  };

  _hideInputError(formElement, inputElement) {
    const errorClass = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorClass.textContent = '';
  };


  _isValid(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };

  _hasInvalidInput(formList) {
    return formList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState(inputList, button) {
    if (this._hasInvalidInput(inputList)) {
      button.setAttribute('disabled', true);
    } else {
      button.removeAttribute('disabled', true);
    }
  };

  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    const button = formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputList, button);

    inputList.forEach((inputElement) => {
      this._hideInputError(formElement, inputElement);
      inputElement.addEventListener('input', () => {
        this._isValid(formElement, inputElement);
        this._toggleButtonState(inputList, button);
      });
    });
  };

  enableValidation() {
    const formList = Array.from(this._popup.querySelectorAll(this._formSelector));
    formList.forEach((formElement) => {
      this._setEventListeners(formElement);
    });
  };
}

export default FormValidator;