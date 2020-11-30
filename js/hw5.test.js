import { sumArray, twiceArray, minAndMaxElementArray } from "./hw5";

describe("Checking for the sum of array numbers", () => {
  test("Positive", () => {
    const listNumbersPositive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(sumArray(listNumbersPositive)).toBe(55);
  });
  test("Negative", () => {
    const listNumbersNegative = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
    expect(sumArray(listNumbersNegative)).toBe(-55);
  });
});

describe("Check for multiplication of array elements", () => {
  test("Positive", () => {
    const listNumbersPositive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(twiceArray(listNumbersPositive)).toEqual([
      2,
      4,
      6,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
    ]);
  });
  test("Negative", () => {
    const listNumbersNegative = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
    expect(twiceArray(listNumbersNegative)).toEqual([
      -2,
      -4,
      -6,
      -8,
      -10,
      -12,
      -14,
      -16,
      -18,
      -20,
    ]);
  });
  describe("Checking for the largest and smallest array element", () => {
    test("Positive", () => {
      const listNumbersPositive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      console.log = jest.fn();
      minAndMaxElementArray(listNumbersPositive);
      expect(console.log).toBeCalledWith(1, 10);
    });
    test("Negative", () => {
      const listNumbersNegative = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
      console.log = jest.fn();
      minAndMaxElementArray(listNumbersNegative);
      expect(console.log).toBeCalledWith(-10, -1);
    });
  });
});
