import './index.css';
import {
  configApi, elementValidation, cardTemplate,
  buttonEdit, popupEdit,
  buttonAdd, popupAdd,
  buttonAvatar, popupAvatar,
  authorInput, sloganInput
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';


const api = new Api(configApi);

const userInfo = new UserInfo({
  author: '.profile__author',
  slogan: '.profile__slogan',
  avatar: '.profile__avatar'
})

api.uploadingUserInformation()
  .then((result) => {
    const inputValues = {
      author: result.name,
      slogan: result.about,
      userId: result._id
    };
    userInfo.setUserInfo(inputValues)
    userInfo.setUserAvatar(result.avatar)
  })
  .catch((error) => {
    console.log(error);
  });

const popupWithFormEdit = new PopupWithForm('.popup_edit', (inputValues) => {
  popupWithFormEdit.renderLoading(true);
  api
    .updateProfile(inputValues.author, inputValues.slogan)
    .then((result) => {
      const infoProfile = {
        author: result.name,
        slogan: result.about
      };
      userInfo.setUserInfo(infoProfile)
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      popupWithFormEdit.renderLoading(false);
      popupWithFormEdit.close();
    });
})

const popupWithFormAvatar = new PopupWithForm('.popup_avatar', (item) => {
  popupWithFormAvatar.renderLoading(true);
  api
    .updateAvatar(item.avatar)
    .then((result) => {
      userInfo.setUserAvatar(result.avatar)
    })
    .catch((error) => {
      console.log(error);
  
    })
    .finally(() => {
      popupWithFormAvatar.renderLoading(false);
      popupWithFormAvatar.close();
    });
});

const popupWithConfirmation = new PopupWithConfirmation('.popup_confirm', (cardId) => {
  api
    .deleteCard(cardId)
    .catch((error) => {
      console.log(error);
    });
});

const popupWithImage = new PopupWithImage('.popup_figure');
const handleCardClick = (img, title) =>
  popupWithImage.open(img, title);

function createCard(item) {
  const card = new Card(item,
    cardTemplate,
    handleCardClick,
    userInfo.returnUserId(),
    (newCard, cardId) => {
      popupWithConfirmation.open(newCard, cardId);
    },
    (cardId) => {
      api
        .likeСard(cardId)
        .then((result) => {
          card.toggleLikeCard();
          card.handleLikesTotal(result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    (cardId) => {
      api
        .deleteLikeСard(cardId)
        .then((result) => {
          card.toggleLikeCard();
          card.handleLikesTotal(result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  );
  const cardElement = card.generateCard();
  return cardElement;
};

api
  .getInitialCards()
  .then((result) => {
    section.rendererCards(result);
  })
  .catch((error) => {
    console.log(error);
  });

const section = new Section((item) => {
  section.addMainItem(createCard(item));
}, '.cards__box');

const popupWithFormAdd = new PopupWithForm('.popup_add', (inputValues) => {
    popupWithFormAdd.renderLoading(true);
    api
      .postNewCard(inputValues.title, inputValues.url)
      .then((result) => {
        section.addItem(createCard(result));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupWithFormAdd.renderLoading(false);
        popupWithFormAdd.close();
      });
  });

buttonAvatar.addEventListener('click', () => {
  popupWithFormAvatar.open();
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

const formValidatorAvatar = new FormValidator(elementValidation, popupAvatar);
formValidatorAvatar.enableValidation();

popupWithFormAvatar.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormAdd.setEventListeners();
popupWithImage.setEventListeners();
popupWithConfirmation.setEventListeners();