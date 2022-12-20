import { renderFigure } from './index.js';


class Card {
  constructor(card, cardTemplate) {
    this._title = card.title;
    this._img = card.img;
    this._cardTemplate = cardTemplate;
  }


  _getTemplate() {
    const cardTemplateClone = this._cardTemplate.cloneNode(true);

    return cardTemplateClone;
  }

  _setData() {
    const titleElement = this._newCard.querySelector('.card__title');
    titleElement.textContent = this._title;

    const imgElement = this._newCard.querySelector('.card__img');
    imgElement.src = this._img;
    imgElement.alt = this._title;

    return imgElement;
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _likeCard(likeButton) {
    likeButton.classList.toggle('button_el_like_active');
  }

  _setEventListeners(imgElement) {
    const deleteButton = this._newCard.querySelector('.button_el_delete');
    deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });


    const likeButton = this._newCard.querySelector('.button_el_like');
    likeButton.addEventListener('click', () => {
      this._likeCard(likeButton);
    });


    imgElement.addEventListener('click', () => {
      renderFigure(this._img, this._title);
    });
  }

  generateCard() {
    this._newCard = this._getTemplate();
    const imgElement = this._setData();
    this._setEventListeners(imgElement);

    return this._newCard;
  }
}

export default Card;