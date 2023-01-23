export default class UserInfo {
  constructor({ author, slogan }) {
    this._author = document.querySelector(author);
    this._slogan = document.querySelector(slogan);
  };

  getUserInfo() {
    return {
      author: this._author.textContent,
      slogan: this._slogan.textContent
    };
  };

  setUserInfo(newAuthor, newSlogan) {
    this._author.textContent = newAuthor.value;
    this._slogan.textContent = newSlogan.value;
  };
};