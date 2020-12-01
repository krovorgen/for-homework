import { rightTriangle, circle, quadraticRoots } from "./hw9";

describe("Checking a triangle ", () => {
  test("The right sides", () => {
    expect(rightTriangle(3, 4, 5)).toBeTruthy();
    expect(rightTriangle(4, 5, 3)).toBeTruthy();
    expect(rightTriangle(5, 3, 4)).toBeTruthy();
  });
});
describe("Checking a square circle ", () => {
  test("The right sides", () => {
    console.log = jest.fn();
    circle(39);
    expect(console.log).toBeCalledWith(245, 4778);
  });
});
describe("Checking for the roots of an equation", () => {
  test("No roots", () => {
    expect(quadraticRoots(5, 4, 3)).toBe("Корней нет");
    console.log = jest.fn();
    quadraticRoots(2, -5, 3);
    expect(console.log).toBeCalledWith(1.5, 1);
    expect(quadraticRoots(4, -4, 1)).toBe(0.5);
  });
});
