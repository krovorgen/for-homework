import { greatestOf, month, willFit } from "./hw2";

describe("Checking which of the numbers is greater", () => {
  test("Checking positive", () => {
    expect(greatestOf(4, 2)).toBe(4);
    expect(greatestOf(5, 5)).toBe(5);
  });

  test("Checking negative", () => {
    expect(greatestOf(-4, -2)).toBe(-2);
    expect(greatestOf(-5, -5)).toBe(-5);
  });
});

describe("Checking for the month number", () => {
  test("Checking positive", () => {
    expect(month(1)).toBe("январь");
    expect(month(12)).toBe("декабрь");
  });

  test("Checking negative", () => {
    expect(month(-1)).not.toBeDefined();
    expect(month(-12)).not.toBeDefined();
  });
});

describe("Checking for the month number", () => {
  test("Check is placed", () => {
    expect(willFit(13, 25)).toBeTruthy();
    expect(willFit(20, 27)).toBeTruthy();
    expect(willFit(20, 25)).toBeFalsy();
  });
});
