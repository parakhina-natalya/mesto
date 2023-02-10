class Card {
  constructor(card, cardTemplate, handleCardClick,
    userId, handleRequestDeleteCard, likeCard, dislikeCard) {
    this._title = card.name;
    this._img = card.link;
    this._likes = card.likes;
    this._cardId = card._id;
    this._userId = userId;
    this._cardOwnerId = card.owner._id;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._handleRequestDeleteCard = handleRequestDeleteCard;
    this._likeCard = likeCard;
    this._dislikeCard = dislikeCard;
  }

  _getTemplate() {
    const cardTemplateClone = document
      .querySelector(this._cardTemplate)
      .content.querySelector('.card')
      .cloneNode(true);

    return cardTemplateClone;
  }

  _renderingLikeTotal() {
    this._likesTotal.textContent = this._likes.length;
  }

  _isThereLike() {
    return this._likes.some(like => like._id === this._userId);
  }

  _handleLikeClick() {
    if (!this._isThereLike()) {
      this._likeCard();
    } else {
      this._dislikeCard();
    };
  }

  handleLikesTotal(result) {
    this._likes = result.likes;
    this._renderingLikeTotal();
  }

  addLikeCard() {
    this._likeButton.classList.add('button_el_like_active');
  }

  removeLikeCard() {
    this._likeButton.classList.remove('button_el_like_active');
  }

  _setData() {
    this._likeButton = this._newCard.querySelector('.button_el_like');
    const titleElement = this._newCard.querySelector('.card__title');
    titleElement.textContent = this._title;

    this._imgElement = this._newCard.querySelector('.card__img');
    this._imgElement.src = this._img;
    this._imgElement.alt = this._title;

    this._likesTotal = this._newCard.querySelector('.card__likes-total');
    this._renderingLikeTotal();
    if (this._isThereLike()) {
      this.addLikeCard();
    };
  }

  _setEventListeners() {
    const deleteButton = this._newCard.querySelector('.button_el_delete');
    if (this._userId === this._cardOwnerId) {
      deleteButton.addEventListener('click', () => {
        this._handleRequestDeleteCard();
      });
    } else {
      deleteButton.remove();
    };

    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
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

  getCardId() {
    return this._cardId;
  }

  deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }
}

export default Card;