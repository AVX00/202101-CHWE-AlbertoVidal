import Button from "./Button.js";

describe("Given a Button component", () => {
  describe("When it's instantiated", () => {
    test("then it should render a button", () => {
      const parentElement = document.createElement("div");

      new Button(parentElement);

      expect(parentElement.querySelector("button")).not.toBeNull();
    });
  });

  describe("When it's instantiated passing pokebotone as text", () => {
    test("then it should render a button with pokebotone as textContent", () => {
      const parentElement = document.createElement("div");
      const buttonText = "pokebotone";

      new Button(parentElement, "", buttonText);

      expect(parentElement.querySelector("button").textContent).toBe(
        buttonText
      );
    });
  });

  describe("When it's instantiated with an action ", () => {
    test("then it should render a button with a eventListener, which should trigger such action on click", () => {
      const parentElement = document.createElement("div");
      const action = jest.fn();

      const button = new Button(parentElement, "", "", action);
      button.element.click();

      expect(action).toHaveBeenCalled();
    });
  });
});
