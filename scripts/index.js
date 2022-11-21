const content = document.querySelector('.content');
const cardsBox = content.querySelector('.cards__box');
const editBtn = content.querySelector('.button_el_edit');
const popupEdit = document.querySelector('.popup_edit');
const closeButtons = document.querySelectorAll('.button_el_close');
const addBtn = content.querySelector('.button_el_add');
const popupAdd = document.querySelector('.popup_add');
const formEdit = document.querySelector('.form_edit');
const authorInput = formEdit.querySelector('.form__item_el_author');
const sloganInput = formEdit.querySelector('.form__item_el_slogan');
const author = document.querySelector('.profile__author');
const slogan = document.querySelector('.profile__slogan');
const formAdd = document.querySelector('.form_add');
const titleInput = formAdd.querySelector('.form__item_el_title');
const imgInput = formAdd.querySelector('.form__item_el_img');
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

const renderCard = (сard) => {
  cardsBox.prepend(generateCard(сard));
};

function openPopup(a) {
  a.classList.add('popup_opened');
}

function closePopup(а) {
  а.classList.remove('popup_opened');
}

function handleProfileFormSubmit(evt) {
  if (authorInput.value.length && sloganInput.value.length !== 0) {
    evt.preventDefault();
    author.textContent = authorInput.value;
    slogan.textContent = sloganInput.value;
    closePopup(popupEdit);
  }
}

function handleCardFormSubmit(evt) {
  if (titleInput.value.length && imgInput.value.length !== 0) {
    evt.preventDefault();
    renderCard({ title: titleInput.value, img: imgInput.value });
    evt.target.reset();
    closePopup(popupAdd);
  }
}

function likeCard(evt) {
  evt.target.classList.toggle('button_el_like_active')
};

function delCard(evt) {
  evt.target.closest('.card').remove();
};

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
    openPopup(popupFigure);
  });

  return cardClone;
};

editBtn.addEventListener('click', () => {
  openPopup(popupEdit);
  authorInput.value = author.textContent;
  sloganInput.value = slogan.textContent;
});

addBtn.addEventListener('click', () => {
  openPopup(popupAdd);
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

formEdit.addEventListener('submit', handleProfileFormSubmit);
formAdd.addEventListener('submit', handleCardFormSubmit);

initialCards.forEach((card) => {
  renderCard(card);
});





