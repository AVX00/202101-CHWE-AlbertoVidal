import Component from "../Component/Component.js";

export default class Button extends Component {
  constructor(parentElement, className, text, action) {
    const htmlTag = "button";

    super(parentElement, htmlTag, className);
    this.text = text;
    this.action = action;
    this.generateInnerText();
    this.addListerers();
  }

  generateInnerText() {
    this.element.textContent = `${this.text}`;
  }

  addListerers() {
    this.element.addEventListener("click", this.action);
  }
}
