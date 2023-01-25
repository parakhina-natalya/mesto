import './index.css';
import {
  initialCards, elementValidation, cardTemplate,
  buttonEdit, popupEdit,
  buttonAdd, popupAdd,
  authorInput, sloganInput
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const popupWithImage = new PopupWithImage('.popup_figure');
const handleCardClick = (img, title) => popupWithImage.open(img, title);

function createCard(item) {
  const card = new Card(item, cardTemplate, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

const newCard = new Section({
  items: initialCards,
  renderer: (item) => {
    newCard.addItem(createCard(item));
  }
}, '.cards__box');
newCard.renderer();

const userInfo = new UserInfo({ author: '.profile__author', slogan: '.profile__slogan' });
const popupWithFormEdit = new PopupWithForm('.popup_edit', (inputValues) => {
  userInfo.setUserInfo(inputValues);
  popupWithFormEdit.close();
});

const popupWithFormAdd = new PopupWithForm('.popup_add', (inputValues) => {
  newCard.addItem(createCard({ title: inputValues.title, img: inputValues.url }));
  popupWithFormAdd.close();
});

buttonEdit.addEventListener('click', () => {
  popupWithFormEdit.open();
  const info = userInfo.getUserInfo();
  authorInput.value = info.author;
  sloganInput.value = info.slogan;
  formValidatorEdit.resetValidation();
});

buttonAdd.addEventListener('click', () => {
  popupWithFormAdd.open();
  formValidatorAdd.resetValidation();
});

const formValidatorAdd = new FormValidator(elementValidation, popupAdd);
formValidatorAdd.enableValidation();

const formValidatorEdit = new FormValidator(elementValidation, popupEdit);
formValidatorEdit.enableValidation();
popupWithFormEdit.setEventListeners();
popupWithFormAdd.setEventListeners();
popupWithImage.setEventListeners();