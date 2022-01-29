import Card from "../Card/Card.js";
import Component from "../Component/Component.js";
import Navigation from "../Navigation/Navigation.js";

export default class PageComponent extends Component {
  constructor(parentElement) {
    const htmlTag = "div";
    const className = "container";

    super(parentElement, htmlTag, className);

    this.generateHTML();
    this.generateNavigation();
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
    const navigationParent = this.element.querySelector(".header");
    new Navigation(navigationParent);
  }

  static addCard(parentElement, { name, sprites: { front_default: url } }) {
    new Card(parentElement, name, url);
  }
}
