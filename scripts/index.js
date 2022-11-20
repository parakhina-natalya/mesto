const content = document.querySelector('.content');
const cardsBox = content.querySelector('.cards__box');
const editBtn = content.querySelector('.button_el_edit');
const popupEdit = document.querySelector('.popup_edit');
const closeBtnEdit = document.querySelector('.button_el_close-edit');

const addBtn = content.querySelector('.button_el_add');
const popupAdd = document.querySelector('.popup_add');
const closeBtnAdd = document.querySelector('.button_el_close-add');

const formEdit = document.querySelector('.form_edit');
const authorInput = formEdit.querySelector('.form__item_el_author');
const sloganInput = formEdit.querySelector('.form__item_el_slogan');
const author = document.querySelector('.profile__author');
const slogan = document.querySelector('.profile__slogan');

const formAdd = document.querySelector('.form_add');
const titleInput = formAdd.querySelector('.form__item_el_title');
const imgInput = formAdd.querySelector('.form__item_el_img');


function popupOpen(pop) {
  pop.classList.add('popup_opened');
}

editBtn.addEventListener('click', () => {
  popupOpen(popupEdit);
  authorInput.value = author.textContent;
  sloganInput.value = slogan.textContent;
});

addBtn.addEventListener('click', () => {
  popupOpen(popupAdd);
});


function popupClose(а) {
  а.classList.remove('popup_opened');
}

closeBtnEdit.addEventListener('click', () => {
  popupClose(popupEdit);
});

closeBtnAdd.addEventListener('click', () => {
  popupClose(popupAdd);
});

function formSubmitHandlerEdit(evt) {
  if (authorInput.value.length && sloganInput.value.length !== 0) {
    evt.preventDefault();
    author.textContent = authorInput.value;
    slogan.textContent = sloganInput.value;
    popupClose(popupEdit);
  }
}
formEdit.addEventListener('submit', formSubmitHandlerEdit);

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


const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const popupFigure = document.querySelector('.popup_figure');

function likeCard(evt) {
  evt.target.classList.toggle('button_el_like_active')
};

function delCard(evt) {
  evt.target.closest('.card').remove();
};

const imgFigure = popupFigure.querySelector('.figure__img');
const captionFigure = popupFigure.querySelector('.figure__caption');
const closeBtnFigure = popupFigure.querySelector('.button_el_close-figure');


function renderFigure(img, title) {
  imgFigure.src = img.src;
  imgFigure.alt = title.textContent;
  captionFigure.textContent = title.textContent;
};

function generateCard(card) {
  const cardClone = cardTemplate.cloneNode(true);
  const img = cardClone.querySelector('.card__img');
  img.src = card.img;
  img.alt = card.title;

  const title = cardClone.querySelector('.card__title');
  title.textContent = card.title;

  const likeBtn = cardClone.querySelector('.button_el_like').addEventListener('click', likeCard);
  const deleteBtn = cardClone.querySelector('.button_el_delete').addEventListener('click', delCard);

  img.addEventListener('click', () => {
    renderFigure(img, title);
    popupOpen(popupFigure);
  });

  closeBtnFigure.addEventListener('click', () => {
    popupClose(popupFigure);
  });

  return cardClone;
};

const renderCard = (сard) => {
  cardsBox.prepend(generateCard(сard));
};

initialCards.forEach((card) => {
  renderCard(card);
});

function formSubmitHandlerAdd(evt) {
  if (titleInput.value.length && imgInput.value.length !== 0) {
    evt.preventDefault();
    renderCard({ title: titleInput.value, img: imgInput.value });
    titleInput.value = '';
    imgInput.value = '';
    popupClose(popupAdd);
  }
}
formAdd.addEventListener('submit', formSubmitHandlerAdd);
