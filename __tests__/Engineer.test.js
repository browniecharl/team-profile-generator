const Engineer = require ('../lib/Engineer');
// Here are the tests to create an object for the role of engineer

test(' Will create object for engineer ', () => {
    const engineer = new Engineer('Robert', 4993, 'browniecharl@gmail.com', 'browniecharl');
    expect(engineer.github).toEqual(expect.any(String));
});
test(' Uses getGithub to get engineer GitHub username', () => {
    const engineer = new Engineer('Robert', 4993, 'browniecharl@gmail.com', 'browniecharl');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});
test(' Uses getRole to display role of engineer ', () => {
    const engineer = new Engineer('Robert', 4993, 'browniecharl@gmail.com', 'browniecharl');
    expect(engineer.getRole()).toBe('Engineer');
});