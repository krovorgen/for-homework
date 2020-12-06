import { dayOfWeek, totalMinutes } from "./hw8";

describe("test date of week", () => {
  test("Check my birthday", () => {
    jest.spyOn(global.window, "prompt").mockImplementation(() => "17.01.1998");
    expect(dayOfWeek()).toBe("Суб");
  });
});

describe("test minutes", () => {
  test("Check total minutes", () => {
    const date = new Date();
    const result = date.getHours() * 60 + date.getMinutes();
    expect(totalMinutes()).toBe(result);
  });
});
