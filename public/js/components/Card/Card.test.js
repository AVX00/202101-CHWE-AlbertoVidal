const { default: Card } = require("./Card");

describe("Given a Card component", () => {
  describe("When it's instantiated", () => {
    test("then it should render a li", () => {
      const parentElement = document.createElement("div");

      new Card(parentElement);

      expect(parentElement.querySelector("li")).not.toBeNull();
    });
    test("then it should render a div", () => {
      const parentElement = document.createElement("div");

      new Card(parentElement);

      expect(parentElement.querySelector("div")).not.toBeNull();
    });
  });
});
