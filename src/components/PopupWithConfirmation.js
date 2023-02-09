import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector('.form');
  }

  open(newItem, itemId) {
    super.open();
    this._newItem = newItem;
    this._itemId = itemId;
  }

  deleteItem() {
    this._newItem.remove();
    this._newItem = null;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._itemId)
    });
  };
}