import Card from "../Card/Card";
import Component from "../Component/Component.js";
import Navigation from "../Navigation/Navigation.js";

export default class PageComponent extends Component {
  constructor(parentElement) {
    const htmlTag = "div";
    const className = "container";

    super(parentElement, htmlTag, className);
  }

  generateHTML() {
    this.element.innerHTML = `
      <header class="header">
        <input type="checkbox" />
      </header>
      <main class="main">
        <ul class="pokemone-list">
        </ul>
      </main>

    `;
  }

  generateNavigation() {
    const navigationParent = this.element.querySelctor(".header");
    new Navigation(navigationParent);
  }

  static addCard() {
    const cardParent = document.querySelctor("pokemone-list");
    new Card(cardParent);
  }
}
