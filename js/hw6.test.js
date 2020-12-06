import { difference, isWord, pow } from "./hw6";

describe("Difference between largest and smallest", () => {
  test("The first is greater than the second", () => {
    expect(difference(18, 14)).toBe(4);
    expect(difference(-18, -14)).toBe(4);
  });
  test("The second is greater than the first", () => {
    expect(difference(14, 18)).toBe(4);
    expect(difference(-14, -18)).toBe(4);
  });
  test("Numbers are equal", () => {
    expect(difference(18, 18)).toBe(0);
    expect(difference(-18, -18)).toBe(0);
  });
});

describe("Checking for one word per line", () => {
  test("three words", () => {
    expect(isWord("python the best")).toBeFalsy();
  });
  test("one word", () => {
    expect(isWord("python")).toBeTruthy();
  });
});

describe("Exponentiation check", () => {
  test("positive", () => {
    expect(pow(2, 10)).toBe(1024);
  });
  test("negative", () => {
    expect(pow(2, -1)).toBe(0.5);
    expect(pow(-2, -1)).toBe(-0.5);
  });
});
