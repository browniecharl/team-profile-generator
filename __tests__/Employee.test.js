const Employee = require('../lib/Employee');
// This will create the new employee
test('this will create the new employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object')
});
// Test get the employee name
test('Gets the employee name', () => {
    const name = 'Robert';
    const employee = new Employee(name);
    expect(employee.name).toBe(name)
});
//Test will get the employee ID
test('Gets the employee ID', () => {
    const id = 4993;
    const employee = new Employee('Foo', id);
    expect(employee.id).toBe(id)
});
// Test will get the employees email
test('Gets the employees email', () => {
    const email = 'browniecharl@gmail.com';
    const employee = new Employee('Foo', 1, email);
    expect(employee.email).toBe(email)
});


