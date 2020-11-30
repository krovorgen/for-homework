export function sumArray(listNumbers) {
  let sum = 0;
  listNumbers.forEach((el) => {
    sum += el;
  });
  return sum;
}

export function twiceArray(listNumbers) {
  return listNumbers.map((x) => x * 2);
}

export function minAndMaxElementArray(listnumbers) {
  const minNumber = Math.min.apply(null, listnumbers);
  const maxNumber = Math.max.apply(null, listnumbers);
  console.log(minNumber, maxNumber);
}
