import { sumMul, sumString, sumDigit } from "./hw1";

describe("Multiplication and Sum Test", () => {
  test("Sum and mul numbers", () => {
    jest.spyOn(console, "log");
    sumMul(1, 2);
    expect(console.log).toBeCalled();
    expect(console.log).toBeCalledWith(3, 2);
  });
});

describe("String length test", () => {
  test("Length check", () => {
    expect(sumString("Maks", "Maksim")).toBe(10);
    expect(sumString("Maks", "Maksim")).toBeDefined();
  });
});

describe("Check for the sum of the digits of a number", () => {
  test("Sum check", () => {
    expect(sumDigit(123)).toBe(6);
    expect(sumDigit(999)).toBe(27);
  });
});
