export const addingAge = () => {
  const user = {
    name: "John",
    age: prompt("Enter a number: "),
  };
  return user;
};

export const adminAddRole = () => ({ ...addingAge(), role: "admin" });

export const creatingVariable = () => {
  const { name, age, role } = adminAddRole();
  console.log(name, age, role);
};
