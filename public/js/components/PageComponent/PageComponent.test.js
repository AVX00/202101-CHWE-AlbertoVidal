import PageComponent from "./PageComponent.js";

describe("Given a Page Component", () => {
  describe("When it's instantied", () => {
    test("then it should render a .container element", () => {
      const parentElement = document.createElement("div");

      new PageComponent(parentElement);

      expect(parentElement.querySelector(".container")).not.toBeNull();
    });

    test("then it should render a .pokemone-list element", () => {
      const parentElement = document.createElement("div");

      new PageComponent(parentElement);

      expect(parentElement.querySelector(".pokemone-list")).not.toBeNull();
    });
  });
});
