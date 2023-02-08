class Api {
  constructor(configApi) {
    this._baseUrl = configApi.baseUrl;
    this._headers = configApi.headers;
  }

  uploadingUserInformation() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(new Error('Что-то пошло не так....'));
      });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(new Error('Что-то пошло не так....'));
      })
  }

  updateProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })

      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(new Error('Что-то пошло не так....'));
      });
  }

  postNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })

      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(new Error('Что-то пошло не так....'));
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(new Error('Что-то пошло не так....'));
      });
  }

  likeСard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(new Error('Что-то пошло не так....'))
      })
  }

  deleteLikeСard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(new Error('Что-то пошло не так....'));
      });
  }

  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(new Error('Что-то пошло не так....'));
      });
  }
}

export default Api;





