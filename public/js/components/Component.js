export default class Component {
  element;

  constructor(parentElement, htmlTag, className) {
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    parentElement.append(this.element);
  }
}
