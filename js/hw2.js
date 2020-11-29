export const greatestOf = (a, b) => (a > b ? a : b);

export const month = (number) =>
  [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ][number - 1];

export const willFit = (circle, square) =>
  Math.sqrt(circle / Math.PI) * 2 <= Math.sqrt(square);
