export function isDate() {
  const regexp = /(^[0-3]{1}[0-9]{1}[/.\-_\\]{1}[0-1]{1}[0-9]{1}[/.\-_\\]{1}[0-9]{2,4}$)|(^[0-1]{1}[0-9]{1}[/.\-_\\]{1}[0-3]{1}[0-9]{1}[/.\-_\\]{1}[0-9]{2,4}$)/;
  const date = prompt("Enter the date: ");
  return regexp.test(date);
}

export function isEmail() {
  const regexp = /^[^0-9.\-_@&$?][0-9.\-_a-zA-Z]+@[a-z0-9]+\.[a-z]{2,6}/;
  const email = prompt("Enter email adress");
  return regexp.test(email);
}

export function isPhoneNumber() {
  const regexp = /^\+?[0-9]{1,4}-?[0-9]{7}$|(^\+?[0-9]{1,4}-?[0-9]{3}-?[0-9]{4}$)|(^\+?[0-9]{1,4}-?[0-9]{3}-{1}[0-9]{2}-{1}[0-9]{2}$)/;
  const phone = prompt("Enter mobile number");
  return regexp.test(phone);
}
