// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_el_save',
  inactiveButtonClass: 'button_el_save_disabled',
  inputErrorClass: 'form__input_el_error',
  errorClass: 'popup__error_visible'
}); 