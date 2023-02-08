const configApi = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: '1d69b9f0-d49a-47d2-84a3-fc000deead31',
    'Content-Type': 'application/json'
  }
};

const elementValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_el_save',
  inputErrorClass: 'form__input_el_error'
};

const content = document.querySelector('.content');
const buttonEdit = content.querySelector('.button_el_edit');
const popupEdit = document.querySelector('.popup_edit');
const buttonAdd = content.querySelector('.button_el_add');
const popupAdd = document.querySelector('.popup_add');
const formEdit = document.querySelector('.form_edit');
const authorInput = formEdit.querySelector('.form__input_el_author');
const sloganInput = formEdit.querySelector('.form__input_el_slogan');
const cardTemplate = '#card-template';
const buttonAvatar = document.querySelector('.profile__avatar-box');
const popupAvatar = document.querySelector('.popup_avatar');

export {
  configApi, elementValidation, cardTemplate,
  buttonEdit, popupEdit,
  buttonAdd, popupAdd, 
  buttonAvatar, popupAvatar,
  authorInput, sloganInput
};