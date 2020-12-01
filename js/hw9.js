export const rightTriangle = (a, b, c) =>
  a ** 2 === b ** 2 + c ** 2 ||
  b ** 2 === c ** 2 + a ** 2 ||
  c ** 2 === a ** 2 + b ** 2;

export const circle = (R) =>
  console.log(
    Number((2 * Math.PI * R).toFixed(0)),
    Number((Math.PI * R ** 2).toFixed(0))
  );

export function quadraticRoots(a, b, c) {
  const D = b ** 2 - 4 * a * c;
  if (D < 0) {
    return "Корней нет";
  }
  if (D === 0) {
    return -b / (2 * a);
  }
  return console.log((-b + D ** 0.5) / (2 * a), (-b - D ** 0.5) / (2 * a));
}
