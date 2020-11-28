import { sum, mul, sumString, sumDigit } from "./hw1";

describe("Multiplication and Sum Test", () => {
  test("Sum of numbers", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(1, -2)).toBe(-1);
  });
  test("Multiplication of numbers", () => {
    expect(mul(1, 2)).toBe(2);
    expect(mul(-1, -2)).toBe(2);
    expect(mul(1, -2)).toBe(-2);
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
