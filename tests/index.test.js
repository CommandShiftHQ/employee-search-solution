const getEmployerRole = require("../index");

test("it needs to return a string", () => {
  const result = getEmployerRole();

  expect(typeof result).toBe("string");
});

test("it needs to return an error if no employee is passed", () => {
  const employeeList = [
    {
      name: "test name",
      role: "test role"
    }
  ];
  const result = getEmployerRole(employeeList);

  expect(result).toEqual("You did not give me an employee to search");
});

test("it needs to return role of employee in a list of two objects", () => {
  const employeeList = [
    {
      name: "test name1",
      role: "test role1"
    },
    {
      name: "test name2",
      role: "test role2"
    }
  ];
  const nameToBeSearched = "test name2";
  const result = getEmployerRole(employeeList, nameToBeSearched);

  expect(result).toEqual("test role2");
});

test("it needs to return an error if not found", () => {
  const employeeList = [
    {
      name: "test name1",
      role: "test role1"
    },
    {
      name: "test name2",
      role: "test role2"
    }
  ];
  const nameToBeSearched = "test name3";
  const result = getEmployerRole(employeeList, nameToBeSearched);

  expect(result).toEqual("Does not work here");
});

test("it handles more data", () => {
  const employeeList = [
    {
      name: "Satti",

      role: "Developer"
    },
    {
      name: "Jenny",

      role: "Sales Associate"
    },
    {
      name: "Javid",

      role: "Human Recommended Reading Assistant"
    }
  ];

  const nameToBeSearched = "Javid";
  const result = getEmployerRole(employeeList, nameToBeSearched);

  expect(result).toEqual("Human Recommended Reading Assistant");
});
