import { isDate, isEmail, isPhoneNumber } from "./hw10";

describe("email", () => {
  test("Verification of the correct email", () => {
    const values = ["krovorgenk@gmail.com", "qwerty@qwerty@hk.ru"];
    jest
      .spyOn(global.window, "prompt")
      .mockImplementation(() => values.shift());
    expect(isEmail()).toBe(true);
    expect(isEmail()).toBe(false);
  });
});

describe("number", () => {
  test("This is isPhoneNumber() ", () => {
    const values = ["80296279908", "89164174267", "1124-asdadas-1234123"];
    jest
      .spyOn(global.window, "prompt")
      .mockImplementation(() => values.shift());
    expect(isPhoneNumber()).toBe(true);
    expect(isPhoneNumber()).toBe(true);
    expect(isPhoneNumber()).toBe(false);
  });
});

describe("date", () => {
  it("This is isDate() ", () => {
    const values = ["11.09.01", "26/04/1986", "17.01.1998", "ss/dd/ww"];
    jest
      .spyOn(global.window, "prompt")
      .mockImplementation(() => values.shift());
    expect(isDate()).toBe(true);
    expect(isDate()).toBe(true);
    expect(isDate()).toBe(true);
    expect(isDate()).toBe(false);
  });
});
