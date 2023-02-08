import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector('.form');
  }

  open(newCard, cardId) {
    super.open();
    this._newCard = newCard;
    this._cardId = cardId;
    console.log(this._newCard, this._cardId);
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
    this._handleFormSubmit(this._cardId);
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._deleteCard(evt);
    });
  };
}