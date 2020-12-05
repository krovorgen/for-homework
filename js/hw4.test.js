import { addingAge, adminAddRole, creatingVariable } from "./hw4";

describe("Writing a number to an object", () => {
  [
    ["test 1", 2],
    ["test 2", 15],
    ["test 3", 18],
  ].forEach((years) => {
    test(years[0], () => {
      const expected = {
        name: "John",
        age: years[1],
      };
      jest.spyOn(global.window, "prompt").mockImplementation(() => years[1]);
      expect(addingAge()).toStrictEqual(expected);
    });
  });
});

describe("Adding a new value to an object", () => {
  [
    ["test 4", 2],
    ["test 5", 15],
    ["test 6", 18],
  ].forEach((years) => {
    test(years[0], () => {
      const expected = {
        name: "John",
        age: years[1],
        role: "admin",
      };
      jest.spyOn(global.window, "prompt").mockImplementation(() => years[1]);
      expect(adminAddRole()).toStrictEqual(expected);
    });
  });
});

describe("Creating variables from an object", () => {
  test("test 7", () => {
    jest.spyOn(console, "log");
    creatingVariable();
    expect(console.log).toBeCalledWith("John", 18, "admin");
  });
});
