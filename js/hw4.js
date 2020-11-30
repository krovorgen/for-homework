export function addingAge() {
  const user = {
    name: "John",
    age: prompt("Enter a number: "),
  };
  return user;
}

export function adminAddRole() {
  const admin = { ...addingAge(), role: "admin" };
  return admin;
}

export function creatingVariable() {
  const { name, age, role } = adminAddRole();
  console.log(name);
  console.log(age);
  console.log(role);
}
