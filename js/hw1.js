export const sum = (a, b) => a + b;
export const mul = (a, b) => a * b;

export const sumString = (str, str1) => str.length + str1.length;

export const sumDigit = (number) => {
  return number
    .toString()
    .split("")
    .reduce((sumDigits, current) => sumDigits + Number(current), 0);
};
