import { addingAge, adminAddRole, creatingVariable } from "./hw4";

describe("Age record", () => {
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
      window.prompt = jest.fn().mockImplementation(() => years[1]);
      expect(addingAge()).toStrictEqual(expected);
    });
  });

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
      window.prompt = jest.fn().mockImplementation(() => years[1]);
      expect(adminAddRole()).toStrictEqual(expected);
    });
  });
  test("test 7", () => {
    console.log = jest.fn();
    creatingVariable();
    expect(console.log).toHaveBeenCalledWith("John");
    expect(console.log).toHaveBeenCalledWith(18);
    expect(console.log).toHaveBeenLastCalledWith("admin");
  });
});
