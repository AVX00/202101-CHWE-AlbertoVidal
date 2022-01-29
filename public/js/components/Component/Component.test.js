import Component from "./Component.js";

describe("Given a Component component", () => {
  describe("When it's instantiated giving 'div' as htmlTag", () => {
    test("Then it should render a div", () => {
      const parentElement = document.createElement("div");
      const htmlTag = "div";

      new Component(parentElement, htmlTag, "");

      expect(parentElement.querySelector(htmlTag)).not.toBeNull();
    });
  });
});
