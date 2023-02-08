export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  addMainItem(item) {
    this._container.append(item);
  }

  rendererCards(cards) {
    cards.forEach((item) => {
      this._renderer(item);
    });
  }
}
