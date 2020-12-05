export const sumNumber = () => {
  console.log(25 * 150 + 75); // По Гаусу
};

export const multiplicationTable7 = () => {
  for (let i = 1, number = 7; i <= 9; i += 1) {
    console.log(`${number} x ${i} = ${i * number}`);
  }
};

export const average = () => {
  const N = +prompt("Enter number: ");
  let sumNumbers = 0;
  for (let i = 1; i <= N; i += 2) {
    sumNumbers += i;
  }
  console.log(sumNumbers / Math.ceil(N / 2));
};
