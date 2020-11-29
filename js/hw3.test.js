import { sumNumber, multiplicationTable7, average } from "./hw3";

describe("To check the amount", () => {
  test("Test for the amount", () => {
    console.log = jest.fn();
    sumNumber();
    expect(console.log).toHaveBeenCalledWith(3825);
  });
});

describe("Multiplication table", () => {
  test("for 7", () => {
    console.log = jest.fn();
    multiplicationTable7();
    expect(console.log).toHaveBeenCalledWith("7 x 1 = 7");
    expect(console.log).toHaveBeenLastCalledWith("7 x 9 = 63");
  });
});

describe("Arithmetic mean from and to", () => {
  [["1 to 5", 5, 3]].forEach((tests) => {
    test(tests[0], () => {
      window.prompt = jest.fn().mockImplementation(() => tests[1]);
      console.log = jest.fn();
      average();
      expect(console.log).toHaveBeenCalledWith(tests[2]);
    });
  });
});
