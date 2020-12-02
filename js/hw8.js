export function dayOfWeek() {
  const input = window.prompt("Введите дату в формате ДД.ММ.ГГГГ");
  const [day, month, year] = input.split(".");
  const date = new Date(`${year}-${month}-${day}`);
  const listDay = ["Вскр", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"];

  return listDay[date.getDay()];
}

export function totalMinutes() {
  const now = new Date();
  const hours = now.getHours();
  const min = now.getMinutes();
  return hours * 60 + min;
}
