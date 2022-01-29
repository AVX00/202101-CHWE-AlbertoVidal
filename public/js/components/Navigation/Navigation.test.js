const { default: Navigation } = require("./Navigation");

describe("given a Navigation component", () => {
  describe("When it's initialized", () => {
    test("Then it should render a nav", () => {
      const parentElement = document.createElement("div");

      new Navigation(parentElement);

      expect(parentElement.querySelector("nav")).not.toBeNull();
    });

    test("Then it should render three anchors", () => {
      const parentElement = document.createElement("div");
      const expectedAnchors = 3;

      new Navigation(parentElement);

      expect(parentElement.querySelectorAll("a").length).toBe(expectedAnchors);
    });
  });
});
