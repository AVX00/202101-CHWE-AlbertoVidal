import Component from "../Component/Component.js";

export default class Card extends Component {
  constructor(parentElement) {
    const htmlTag = "li";
    super(parentElement, htmlTag, "");
    this.generateInnerHtml();
  }

  generateInnerHtml() {
    this.element.innerHTML = `
    <div class="card"></div>
    `;
  }
}
