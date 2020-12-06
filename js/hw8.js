export const dayOfWeek = () => {
  const input = window.prompt("Введите дату в формате ДД.ММ.ГГГГ");
  const [day, month, year] = input.split(".");
  const date = new Date(`${year}-${month}-${day}`);
  const listDay = ["Вскр", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"];

  return listDay[date.getDay()];
};

export const totalMinutes = () => {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
};
