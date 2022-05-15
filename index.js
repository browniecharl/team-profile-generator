const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require('./src/generatePage')
const teamProfile = [];
const profileQuestions = [ {
        type: 'list',
        name: 'role',
        message: 'Choose your role on the team?',
        choices: ['Intern', 'Manager', 'Engineer']
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the employee?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }else{
                console.log('Please enter the employees name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the employees id number?',
        validate: idInput => {
            if (idInput) {
                return true;
            }else{
                console.log('Please enter an ID number for the employee.');
                return false;
            }
        }
    },
    {
        type: 'input', 
        name: 'email',
        message: 'Enter the employees email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }else{
                console.log('Please enter a valid email for the employee.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number for manager.',
        when: (officeNumberInput) => officeNumberInput.role === 'Manager',
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            }else{
                console.log('Please enter an office number.');
                return false;
            }
        }
    },
    {
        type: 'input', 
        name: 'school',
        message: 'Enter name of interns school.',
        when: (schoolInput) => schoolInput.role === 'Intern',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            }else{
                console.log('Please enter school attended by intern.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter gitHub username',
        when: (githubInput) => githubInput.role === 'Engineer',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }else{
                console.log('Please enter GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmEmployee',
        message: 'Would you like to enter another employee?',
        default: false
    }
];
const employeePrompt = () => {
    console.log(`
====================
  Add new Employee
====================`);
}
const addEmployee = () => {
    return inquirer.prompt(profileQuestions)
    .then(employeeAnswers => {
        let {role, name, id, email, officeNumber, school, github} = employeeAnswers;
        let employee;
        if (role === 'Intern') {
            employee = new Intern(name, id, email, school);
        }
        if (role === 'Manager') {
            employee = new Manager(name, id, email, officeNumber);
        }
        if (role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
        }
        teamProfile.push(employee);
        if (employeeAnswers.confirmEmployee) {
            return addEmployee(teamProfile)
        }else{
            return teamProfile;
        }
    });
}
    const writeFile = fileContent => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                console.log(err);
                return;
            }else{
                console.log ('Profile has been generated.')
            }
        });
    };
    addEmployee().then(teamProfile => {
        return generatePage(teamProfile);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });