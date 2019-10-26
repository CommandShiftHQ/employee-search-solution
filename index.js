const getEmployerRole = (employerArr, employeeToSearch) => {
  if (!employerArr) {
    return "You did not give me an array";
  }

  if (!employeeToSearch) {
    return "You did not give me an employee to search";
  }

  const foundEmployee = employerArr.find(
    element => element.name === employeeToSearch
  );

  if (!foundEmployee) {
    return "Does not work here";
  }

  return foundEmployee.role;
};

module.exports = getEmployerRole;
