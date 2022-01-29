import Component from "../Component/Component.js";

export default class Card extends Component {
  constructor(parentElement, pokename, pokeurl) {
    const htmlTag = "li";
    super(parentElement, htmlTag, "");
    this.pokename = pokename;
    this.pokeurl = pokeurl;
    this.generateInnerHtml();
  }

  generateInnerHtml() {
    this.element.innerHTML = `
    <div class="card">
    <img scr="${this.pokeurl}"></img>
    <p>${this.pokename}</p>
    </div>
    `;
  }
}
