export const sumMul = (a, b) => console.log(a + b, a * b);

export const sumString = (str, str1) => str.length + str1.length;

export const sumDigit = (number) => {
  return number
    .toString()
    .split("")
    .reduce((sumDigits, current) => sumDigits + Number(current), 0);
};
