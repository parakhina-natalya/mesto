import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._form = this._popupSelector.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.form__input');
    this._handleFormSubmit = handleFormSubmit;
    this._content = this._form.querySelector('.button__text-content');
    this._loading = this._form.querySelector('.button__text-loading');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

 renderLoading(isLoading) {
  if (isLoading) {
    this._loading.classList.remove('button__off');
    this._content.classList.add('button__off');
  } else {
    this._loading.classList.add('button__off');
    this._content.classList.remove('button__off');
  };
}

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}