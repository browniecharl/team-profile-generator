const Employee = require('../lib/Employee');
// Here are the tests to create a new employee object containing, employee name, id, email, and role

test(' Will create the object for "employee" ', () => {
    const employee = new Employee('Robert', 4993, 'browniecharl@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
test(' Uses getName to get employee name ', () => {
    const employee = new Employee('Robert', 4993, 'browniecharl@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});
test(' Uses getId to get employee ID', () => {
    const employee = new Employee('Robert', 4993, 'browniecharl@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});
test(' Uses getEmail to get employee email ', () => {
    const employee = new Employee('Robert', 4993, 'browniecharl@gmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});
test(' Uses getRole to get employee role ', () => {
    const employee = new Employee('Robert', 4993, 'browniecharl@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});