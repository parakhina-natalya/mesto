export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  };

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  };

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  };

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  };

  setEventListeners() {
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget || evt.target.classList.contains('button__close-icon')) {
        this.close();
      };
    });
  };
};