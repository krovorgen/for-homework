export function sumNumber() {
  let sum = 0;
  for (let i = 50; i <= 100; i += 1) {
    sum += i;
  }
  console.log(sum);
}

export function multiplicationTable7() {
  for (let i = 1, number = 7; i <= 9; i += 1) {
    console.log(`${number} x ${i} = ${i * number}`);
  }
}

export function average() {
  const N = +prompt("Enter number: ");
  let sumNumbers = 0;
  let totalNumber = 0;
  for (let i = 1; i <= N; i += 1) {
    if (i % 2 !== 0) {
      sumNumbers += i;
      totalNumber += 1;
    }
  }
  console.log(sumNumbers / totalNumber);
}
