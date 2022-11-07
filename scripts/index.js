let btnEdit = document.querySelector('.button_el_edit');
let popup = document.querySelector('.popup');
let btnClose = popup.querySelector('.button_el_close');
let formElement = document.querySelector('.form');
let authorInput = formElement.querySelector('.form__item_el_author');
let sloganInput = formElement.querySelector('.form__item_el_slogan');
let author = document.querySelector('.profile__author');
let slogan = document.querySelector('.profile__slogan');

function popupOpen() {
	popup.classList.add('popup_opened');
	authorInput.value = author.textContent;
	sloganInput.value = slogan.textContent;
}

function popupClose() {
	popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
	if (authorInput.value.length && sloganInput.value.length !== 0) {
		evt.preventDefault();
		author.textContent = authorInput.value;
		slogan.textContent = sloganInput.value;
		popupClose();
	}
}

btnEdit.addEventListener('click', popupOpen);
btnClose.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);


