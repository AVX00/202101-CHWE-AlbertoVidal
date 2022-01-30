import Button from "../Button/Button.js";
import Card from "../Card/Card.js";
import Component from "../Component/Component.js";
import Navigation from "../Navigation/Navigation.js";

const myPokeApi = "https://enigmatic-depths-16565.herokuapp.com/pokemon";
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
      <footer class="footer"></footer>

    `;
  }

  generateNavigation() {
    const navigationParent = this.element.querySelector(".header");
    new Navigation(navigationParent);
  }

  static addCard(parentElement, { name, sprites: { front_default: url } }) {
    return new Card(parentElement, name, url);
  }

  static getButtonClass(buttonLink) {
    if (!buttonLink) {
      return "button button--disabled";
    }
    return "button button--enabled";
  }

  static generateButtons(
    parentElement,
    previous,
    next,
    previousLink,
    nextLink
  ) {
    const button1Text = "Previous";
    const button2Text = "Next";
    const buttonsParent = parentElement;
    buttonsParent.innerHTML = "";
    new Button(
      buttonsParent,
      this.getButtonClass(previousLink),
      button1Text,
      previous
    );

    new Button(buttonsParent, this.getButtonClass(nextLink), button2Text, next);
  }

  static generateFavButton(parentElement, pokemon) {
    const action = async () => {
      const data = await JSON.stringify(pokemon);
      fetch(myPokeApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      });
    };

    new Button(parentElement, "favButton", "push", action);
  }

  static generateRemoveButton(parentElement, pokemon) {
    const action = async () => {
      const pokemonToRemove = pokemon.id;
      fetch(`${myPokeApi}/${pokemonToRemove}`, {
        method: "DELETE",
      });
    };

    new Button(parentElement, "favButton", "push", action);
  }
}
