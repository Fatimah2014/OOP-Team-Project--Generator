
const inquirer = require('inquirer')
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employees = [];


Manager = () => {
    console.log("Build your team");
    inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "Please enter manager name:",
           
        },
        {
            type: "input",
            name: "ID",
            message:"Please eneter manager number:",
        },
        { 
            type:"input",
            name: "email",
            message: "Please enter manager email:"

        },
        {
            type: "input",
            name: "number",
            message: "Please enter Manager office number:",
            validate: answer => {
                if (answer < 0) {
                    console.log ("must enter manager office number!!!!")
                    return false;
                }
                return true;
            }
        }
    ]).then(answer => {
      
        const manager = new Manager( answer.managerName, answer)
            employees.push(manager);
            addEmployee();
       });
        


    };

    Employees = () => {
        inquirer.prompt([{
                type: 'list',
                name: "positon",
                choices: ['engineer', 'intern',]
            }]).then(chosen => {
                    switch (chosen.position) {
                        case "engineer":
                            engineer();
                            break;
                        case "Intern":
                            intern();
                            break;
                    }
                });
    };
   

Intern = () => {
    inquirer.prompt([{
        type: "input",
        name: "intern",
        message: "Enter Intern Name:"
    },
    {
        type: "input",
        name: "id",
        messgae: "Enter intern identification number",
    },
    {
        type: "input",
        name: "email",
        messgage: "Enter inter email:",
    },
    {
        type: "input",
        name: "github",
        message: "Enter intern gitgub url:"
    }]).then(answers => {
        const intern = new Intern(answers.internName, answers)
        employees.push(intern);
        intern();
    })
};


    
Engineer = () => {
    inquirer.prompt([{
        type: "input",
        name: "engineer",
        message: "Enter Engineer Name:"
    },
    {
        type: "input",
        name: "id",
        messgae: "Enter engineer identification number",
    },
    {
        type: "input",
        name: "email",
        messgage: "Enter engineer email:",
    },
    {
        type: "input",
        name: "github",
        message: "Enter engineer gitgub url:"
    }]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers)
        employees.push(engineer);
        employees();
    })

}

const createTeam = generateTeam(answers)
console.log('CreateTeam:', createTeam)

fs.writeFile('.dist/team.html', renderPage(team), UTF-8, (err) => err ? console.log(err) : console.log('successfully created README'))



























// // // TODO: Include packages needed for this application

// // // TODO: Create an array of questions for user input
// // const questions = [];

// // // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}

// // // TODO: Create a function to initialize app
// // function init() {}

// // // Function call to initialize app
// // init();
