import Button from "../Button/Button.js";
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

  static getButtonClass(buttonLink) {
    if (!buttonLink) {
      return "button button--disabled";
    }
    return "button button--enabled";
  }

  static generateButtons(buttonsParent) {
    const button1Text = "Previous";
    const button2Text = "Next";

    new Button(
      buttonsParent,
      this.getButtonClass(true),
      button1Text,
      this.getButton1Action
    );

    new Button(
      buttonsParent,
      this.getButtonClass(false),
      button2Text,
      this.getButton2Action
    );
  }

  static getButton1Action() {}

  static getButton2Action() {}
}
