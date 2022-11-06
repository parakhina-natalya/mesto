let btnEdit = document.querySelector('.button__edit');
let popup = document.querySelector('.popup');
let btnClose = popup.querySelector('.button__close');
let btnSave = popup.querySelector('.button__save');
let formElement = document.querySelector('.form');
let authorInput = formElement.querySelector('.form__item_el_author');
let sloganInput = formElement.querySelector('.form__item_el_slogan');
let author = document.querySelector('.profile__author');
let slogan = document.querySelector('.profile__slogan');

function popupOpen() {
	popup.classList.add('popup_opened');
}

function popupClose() {
	popup.classList.remove('popup_opened');
}

btnEdit.addEventListener('click', popupOpen);
btnClose.addEventListener('click', popupClose);

function formSubmitHandler(evt) {
	if (authorInput.value.length && sloganInput.value.length !== 0) {
		evt.preventDefault();
		author.textContent = authorInput.value;
		slogan.textContent = sloganInput.value;
		popupClose();
	}
}

formElement.addEventListener('submit', formSubmitHandler);
btnSave.addEventListener('click', formSubmitHandler);

