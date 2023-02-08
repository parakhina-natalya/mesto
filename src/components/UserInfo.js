export default class UserInfo {
  constructor({ author, slogan, avatar }) {
    this._author = document.querySelector(author);
    this._slogan = document.querySelector(slogan);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      author: this._author.textContent,
      slogan: this._slogan.textContent,
      avatar: this._avatar.src
    };
  }

  returnUserId() {
    return this._userId;
  }


  setUserInfo(inputValues) {
    this._author.textContent = inputValues.author;
    this._slogan.textContent = inputValues.slogan;
    this._userId = inputValues.userId;
  }

  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }
}