import { initialCards, elementValidation } from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const content = document.querySelector('.content');
const cardsBox = content.querySelector('.cards__box');
const buttonEdit = content.querySelector('.button_el_edit');
const popupElements = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_edit');
const buttonAdd = content.querySelector('.button_el_add');
const popupAdd = document.querySelector('.popup_add');
const formEdit = document.querySelector('.form_edit');
const authorInput = formEdit.querySelector('.form__input_el_author');
const sloganInput = formEdit.querySelector('.form__input_el_slogan');
const author = document.querySelector('.profile__author');
const slogan = document.querySelector('.profile__slogan');
const formAdd = document.querySelector('.form_add');
const titleInput = formAdd.querySelector('.form__input_el_title');
const imgInput = formAdd.querySelector('.form__input_el_url');
const cardTemplate = '#card-template';
const popupFigure = document.querySelector('.popup_figure');
const imgFigure = popupFigure.querySelector('.figure__img');
const captionFigure = popupFigure.querySelector('.figure__caption');

const createCard = (card, cardTemplate) => {
  return new Card(card, cardTemplate);
}

const renderCard = (card, cardTemplate) => {
  const newRenderCard = createCard(card, cardTemplate);
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

const formValidatorEdit = new FormValidator(elementValidation, popupEdit);
formValidatorEdit.enableValidation();

buttonEdit.addEventListener('click', () => {
  openPopup(popupEdit);
  authorInput.value = author.textContent;
  sloganInput.value = slogan.textContent;
  formValidatorEdit.resetValidation();
});

const formValidatorAdd = new FormValidator(elementValidation, popupAdd);
formValidatorAdd.enableValidation();

buttonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
  formAdd.reset();
  formValidatorAdd.resetValidation();
});

popupElements.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('button__close-icon')) {
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