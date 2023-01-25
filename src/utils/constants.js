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

const content = document.querySelector('.content');
const buttonEdit = content.querySelector('.button_el_edit');
const popupEdit = document.querySelector('.popup_edit');
const buttonAdd = content.querySelector('.button_el_add');
const popupAdd = document.querySelector('.popup_add');
const formEdit = document.querySelector('.form_edit');
const authorInput = formEdit.querySelector('.form__input_el_author');
const sloganInput = formEdit.querySelector('.form__input_el_slogan');
const cardTemplate = '#card-template';

export {
  initialCards, elementValidation, cardTemplate,
  buttonEdit, popupEdit,
  buttonAdd, popupAdd,
  authorInput, sloganInput,
};