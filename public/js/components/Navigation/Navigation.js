import Component from "../Component/Component.js";

export default class Navigation extends Component {
  constructor(parentElement) {
    const htmlTag = "nav";
    const className = "navigation";
    super(parentElement, htmlTag, className);
    this.generateHtml();
  }

  generateHtml() {
    this.element.innerHTML = `
      <a class="navigation__link" href="/index.html">pokemones</a>
      <a class="navigation__link" href="/myPokemon.html">my pokemones</a>
      <a class="navigation__link" href="">detailed pokemoning</a>
    `;
  }
}
