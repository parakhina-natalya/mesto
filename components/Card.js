class Card {
  constructor(card, cardTemplate, handleCardClick) {
    this._title = card.title;
    this._img = card.img;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplateClone = document
      .querySelector(this._cardTemplate)
      .content.querySelector('.card')
      .cloneNode(true);

    return cardTemplateClone;
  }

  _setData() {
    const titleElement = this._newCard.querySelector('.card__title');
    titleElement.textContent = this._title;

    this._imgElement = this._newCard.querySelector('.card__img');
    this._imgElement.src = this._img;
    this._imgElement.alt = this._title;
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _likeCard() {
    this._likeButton.classList.toggle('button_el_like_active');
  }

  _setEventListeners() {
    const deleteButton = this._newCard.querySelector('.button_el_delete');
    deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });

    this._likeButton = this._newCard.querySelector('.button_el_like');
    this._likeButton.addEventListener('click', () => {
      this._likeCard();
    });

    this._imgElement.addEventListener('click', () => {
      this._handleCardClick(this._img, this._title);
    });
  }

  generateCard() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setEventListeners();

    return this._newCard;
  }
}

export default Card;