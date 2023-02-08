class FormValidator {
  constructor(elementValidation, popup) {
    this._formSelector = elementValidation.formSelector;
    this._inputSelector = elementValidation.inputSelector;
    this._submitButtonSelector = elementValidation.submitButtonSelector;
    this._inputErrorClass = elementValidation.inputErrorClass;
    this._popup = popup;
  }

  _showInputError(inputElement, errorMessage) {
    const errorClass = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorClass.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorClass = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorClass.textContent = '';
  }


  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._button.setAttribute('disabled', true);
    } else {
      this._button.removeAttribute('disabled', true);
    }
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    })
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._button = this._formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement = this._popup.querySelector(this._formSelector);
    this._setEventListeners();
  }
}

export default FormValidator;