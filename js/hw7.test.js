import { addForm } from "./hw7";

describe("", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("div");
  });

  test("Create basic HTML page", () => {
    addForm(el);
    const button = el.querySelector(".button");
    const input = el.querySelector(".input");
    expect(button).not.toBe(null);
    expect(input).not.toBe(null);
  });

  test("Shadow button", () => {
    addForm(el);
    const button = el.querySelector(".button");
    const input = el.querySelector(".input");
    input.value = "123";
    input.dispatchEvent(new global.window.Event("input"));
    expect(button.hidden).toBe(false);
    input.value = "";
    input.dispatchEvent(new global.window.Event("input"));
    expect(button.hidden).toBe(true);
  });
});
