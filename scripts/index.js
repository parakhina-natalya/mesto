import Card from './Card.js';
import FormValidator from './FormValidator.js';

const content = document.querySelector('.content');
const cardsBox = content.querySelector('.cards__box');
const editBtn = content.querySelector('.button_el_edit');
const popupElements = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_edit');
const closeButtons = document.querySelectorAll('.button_el_close');
const addBtn = content.querySelector('.button_el_add');
const popupAdd = document.querySelector('.popup_add');
const addBtnSave = document.querySelector('.button_el_save-add');
const formEdit = document.querySelector('.form_edit');
const authorInput = formEdit.querySelector('.form__input_el_author');
const sloganInput = formEdit.querySelector('.form__input_el_slogan');
const author = document.querySelector('.profile__author');
const slogan = document.querySelector('.profile__slogan');
const formAdd = document.querySelector('.form_add');
const titleInput = formAdd.querySelector('.form__input_el_title');
const imgInput = formAdd.querySelector('.form__input_el_url');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const popupFigure = document.querySelector('.popup_figure');
const imgFigure = popupFigure.querySelector('.figure__img');
const captionFigure = popupFigure.querySelector('.figure__caption');

const initialCards = [
  {
    title: 'Архыз',
    img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elementValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_el_save',
  inputErrorClass: 'form__input_el_error'
};

const renderCard = (card, cardTemplate) => {
  const newRenderCard = new Card(card, cardTemplate);
  cardsBox.prepend(newRenderCard.generateCard());
};


function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  author.textContent = authorInput.value;
  slogan.textContent = sloganInput.value;
  closePopup(popupEdit);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard({ title: titleInput.value, img: imgInput.value }, cardTemplate);
  evt.target.reset();
  closePopup(popupAdd);
}

function renderFigure(img, title) {
  imgFigure.src = img;
  imgFigure.alt = title;
  captionFigure.textContent = title;
  openPopup(popupFigure);
};

editBtn.addEventListener('click', () => {
  openPopup(popupEdit);
  authorInput.value = author.textContent;
  sloganInput.value = slogan.textContent;
  const formValidator = new FormValidator(elementValidation, popupEdit);
  formValidator.enableValidation();
});

addBtn.addEventListener('click', () => {
  openPopup(popupAdd);
  formAdd.reset();
  const formValidator = new FormValidator(elementValidation, popupAdd);
  formValidator.enableValidation();
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => {
    closePopup(popup);
  });
});

popupElements.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  });
});

formEdit.addEventListener('submit', handleProfileFormSubmit);
formAdd.addEventListener('submit', handleCardFormSubmit);

initialCards.forEach((card) => {
  renderCard(card, cardTemplate);
});

export { renderFigure };