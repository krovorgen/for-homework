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
    /* expect(button.getAttribute('hidden')).toBe(null); */
    expect(button.hidden).toBeFalsy();
    input.value = "";
    input.dispatchEvent(new global.window.Event("input"));
    /* expect(button.getAttribute('hidden')).toBe(true); */
    expect(button.hidden).toBeTruthy();
  });

  it("only 5 p is enabled", () => {
    addForm(el);
    const button = el.querySelector(".button");
    const input = el.querySelector(".input");
    let text;
    for (let i = 0; i < 7; i += 1) {
      text = `${Math.random()}`;
      input.value = text;
      input.dispatchEvent(new window.Event("input"));
      button.dispatchEvent(new window.Event("click"));
    }

    expect(input.value).toBe("");
    expect(button.hidden).toBe(true);
    expect(el.querySelectorAll("p").length).toBe(5);
    expect(el.childNodes[6].innerText).toBe(text);
  });
});
