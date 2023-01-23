import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._imgFigure = this._popupSelector.querySelector('.figure__img');
    this._captionFigure = this._popupSelector.querySelector('.figure__caption');
  };

  open(img, title) {
    super.open();

    this._imgFigure.src = img;
    this._imgFigure.alt = title;
    this._captionFigure.textContent = title;
  };
};