import '../src/pages/index.css';
import { initialCards, elementValidation } from './scripts/constants.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

const content = document.querySelector('.content');
const cardsBoxSelector = '.cards__box';
const buttonEdit = content.querySelector('.button_el_edit');
const popupEdit = document.querySelector('.popup_edit');
const buttonAdd = content.querySelector('.button_el_add');
const popupAdd = document.querySelector('.popup_add');
const formEdit = document.querySelector('.form_edit');
const authorInput = formEdit.querySelector('.form__input_el_author');
const sloganInput = formEdit.querySelector('.form__input_el_slogan');
const formAdd = document.querySelector('.form_add');
const titleInput = formAdd.querySelector('.form__input_el_title');
const imgInput = formAdd.querySelector('.form__input_el_url');
const cardTemplate = '#card-template';
const classPopupEdit = new Popup('.popup_edit');
const popupWithImage = new PopupWithImage('.popup_figure');
const userInfo = new UserInfo({ author: '.profile__author', slogan: '.profile__slogan' });

const handleCardClick = (img, title) => popupWithImage.open(img, title);

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, cardTemplate,
      handleCardClick
    );
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, cardsBoxSelector);

cardList.renderer();

const popupWithForm = new PopupWithForm('.popup_add', (InputValues) => {
  const newCard = new Section({
    items: [{ title: titleInput.value, img: imgInput.value }],
    renderer: (item) => {
      const card = new Card(item, cardTemplate, handleCardClick);
      const cardElement = card.generateCard();
      newCard.addItem(cardElement);
    }
  }, cardsBoxSelector);

  newCard.renderer();

  console.log(InputValues);
  popupWithForm.close();
});

const formValidatorAdd = new FormValidator(elementValidation, popupAdd);
formValidatorAdd.enableValidation();

const formValidatorEdit = new FormValidator(elementValidation, popupEdit);
formValidatorEdit.enableValidation();

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo(authorInput, sloganInput);
  classPopupEdit.close();
}

buttonEdit.addEventListener('click', () => {
  classPopupEdit.open();
  authorInput.value = userInfo.getUserInfo().author;
  sloganInput.value = userInfo.getUserInfo().slogan;
  formValidatorEdit.resetValidation();
});

buttonAdd.addEventListener('click', () => {
  popupWithForm.open();
  formValidatorAdd.resetValidation();
});

formEdit.addEventListener('submit', handleProfileFormSubmit);
classPopupEdit.setEventListeners();
popupWithForm.setEventListeners();
popupWithImage.setEventListeners();