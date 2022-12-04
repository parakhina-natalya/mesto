// включение валидации вызовом enableValidation
// все настройки передаются при вызове

/*enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_el_save',
  inactiveButtonClass: '.button_el_save_disabled',
  inputErrorClass: '.form__input_el_error',
  errorClass: '.form__error_visible'
}); */


const form = document.querySelector('.form');
const formInput = form.querySelector('.form__input');

const showInputError = (form, inputElement, errorMessage) => {
  const formError = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_el_error');
  formError.textContent = errorMessage;
};

const hideInputError = (form, inputElement) => {
  const formError = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_el_error');
  formError.textContent = '';
};

const isValid = (form, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(form, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(form, inputElement);
  }
};


const setEventListeners = (form) => {
  const formInputs = Array.from(form.querySelectorAll('.form__input'));
  const button = form.querySelector('.button_el_save');
  formInputs.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(form, inputElement);

     toggleButtonState(formInputs, button);
    });
  });
};  


const enableValidation = () => {
  const forms = Array.from(document.querySelectorAll('.form'));
  forms.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation(); 


const hasInvalidInput = (forms) => {
  return forms.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (forms, button) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(forms)) {
    // сделай кнопку неактивной
    button.classList.add('button_el_save:disabled');
  } else {
    // иначе сделай кнопку активной
    button.classList.remove('button_el_save:disabled');
  }
}; 
