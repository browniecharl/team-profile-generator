const Intern = require ('../lib/Intern');
// Here are the tests to create an object for the role of intern

test(' Will create object for Intern ', () => {
    const intern = new Intern('Robert', 4993, 'browniecharl@gmail.com', 'browniecharl', 'MCCC');
    expect(intern.school).toEqual(expect.any(String));
});
test(' Uses getSchool to get interns school ', () => {
    const intern = new Intern('Robert', 4993, 'browniecharl@gmail.com', 'browniecharl', 'MCCC');
    expect(intern.getSchool()).toEqual(expect.any(String));
});
test(' Uses getRole to get role of intern ', () => {
    const intern = new Intern('Robert', 4993, 'browniecharl@gmail.com', 'browniecharl', 'MCCC');
    expect(intern.getRole()).toBe('Intern');
});