const Employee = require('../lib/Employee');
// This will create the new employee
test('this will create the new employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object')
});
// Test get the employee name
test('Gets the employee name', () => {
    const name = 'Robert';
    const employee = new Employee('robert');
    expect(employee.name).toBe('robert')
});


