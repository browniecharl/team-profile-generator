const Manager = require('../lib/Manager');
// Here are the tests to create an object for the role of manager

test(' Will create object for Manager ', () => {
    const manager = new Manager('Robert', 4993, 'browniecharl@gmail.com', 409);
    expect(manager.office).toEqual(expect.any(Number));
});
test(' Uses getRole to get role of manager ', () => {
    const manager = new Manager('Robert', 4993, 'browniecharl@gmail.com', 409);
    expect(manager.getRole()).toBe('Manager');
});