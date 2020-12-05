export const sumArray = (listNumbers) =>
  listNumbers.reduce((sumDigits, current) => sumDigits + Number(current), 0);

export const twiceArray = (listNumbers) => {
  return listNumbers.map((x) => x * 2);
};

export const minAndMaxElementArray = (listnumbers) => {
  console.log(Math.min(...listnumbers), Math.max(...listnumbers));
};
