import { sumNumber, multiplicationTable7, average } from "./hw3";

describe("To check the amount", () => {
  test("Test for the amount", () => {
    jest.spyOn(console, "log");
    sumNumber();
    expect(console.log).toBeCalledWith(3825);
  });
});

describe("Multiplication table", () => {
  test("for 7", () => {
    jest.spyOn(console, "log");
    multiplicationTable7();
    expect(console.log).toBeCalledWith("7 x 1 = 7");
    expect(console.log).lastCalledWith("7 x 9 = 63");
    expect(console.log).toBeCalledTimes(9);
  });
});

describe("Arithmetic mean from and to", () => {
  [["1 to 5", 5, 3]].forEach((tests) => {
    test(tests[0], () => {
      jest.spyOn(global.window, "prompt").mockImplementation(() => tests[1]);
      jest.spyOn(console, "log");
      average();
      expect(console.log).toHaveBeenCalledWith(tests[2]);
    });
  });
});
