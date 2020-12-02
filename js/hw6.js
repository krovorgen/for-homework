export const difference = (a, b) => {
  if (a > b) {
    return a - b;
  }
  return b - a;
};

export const isWord = (str) => str.split(" ").length === 1;
export const pow = (a, b) => {
  return a ** b;
};
