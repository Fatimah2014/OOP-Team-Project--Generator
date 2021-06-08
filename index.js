const inquirer = require('inquirer')
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const employeeArr = [];


let generateManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter manager name:",

        },
        {
            type: "input",
            name: "id",
            message: "Please eneter manager number:",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter manager email:"

        },
        {
            type: "input",
            name: "number",
            message: "Please enter Manager office number:",
            validate: answer => {
                if (answer < 0) {
                    console.log("must enter manager office number!!!!")
                    return false;
                }
                return true;
            }
        }
    ]).then(answer => {

        const manager = new Manager(answer.name, answer.id, answer.email, answer.number)
        employeeArr.push(manager);
        generateEmployees();
    });
};

let generateEmployees = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: "position",
            choices: ['engineer', 'intern', 'No More']
        }]).then(chosen => {
            switch (chosen.position) {
                case "engineer":
                    generateEngineer();
                    break;
                case "intern":
                    generateIntern();
                    break;
                case "No More":
                    console.log(employeeArr)
                    fs.writeFile("./dist/example.html", JSON.stringify(employeeArr), err => {
                        if(err) throw err;
                    })
                    console.log("bye felicia")
                    break;
            }
        });
};

let generateIntern = () => {
    inquirer.prompt([{
        type: "input",
        name: "name",
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
        messgage: "Enter intern email:",
    },
    {
        type: "input",
        name: "github",
        message: "Enter intern github url:"
    }]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.github)
        employeeArr.push(intern);
        generateEmployees();
    })
};

let generateEngineer = () => {
    inquirer.prompt([{
        type: "input",
        name: "name",
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
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeeArr.push(engineer);
        generateEmployees();
    })

};

const managerHTML = (GenerateManager) => {
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>OOP-Team-Project-Generator</title>
</head>
<body>
<header>
    <div id= 'title'class="jumbotron">
		<h1 id= 'title' class="text-center">My Team</h1>
	</div>
	<div class="container">
		
	</div>
</header>

   
    <div class="card" style="width: 18rem;">

        <div class="card-body">
          <h5 class="card-title">${answers.name}</h5>
          <p class="card-text"><span class="iconify" data-icon="fa-solid:mug-hot" data-inline="false"></span> Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li id= 'info'class="list-group-item">id:${answesr.id}</li>
          <li id='info'class="list-group-item">Email:${answers.email}</li>
          <li id='info'class="list-group-item">Office Number:${answers.number}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link"></a>
          <a href="#" class="card-link"></a>
        </div>
      </div>
    
</body>
</html>`
    fs.appendFile("./dist/team.html", managerHTML, (err) => err ? console.log(err) : console.log('successfully created card'))
};

const engineerHTML = (GenerateEngineer) => {
    `
<div class="card" style="width: 18rem;">

    <div class="card-body">
      <h5 class="card-title">${answers.name}</h5>
      <p class="card-text"><span class="iconify" data-icon="akar-icons:glasses" data-inline="false"></span> Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
      <li id= 'info'class="list-group-item">id:${answers.id}</li>
      <li id='info'class="list-group-item">Email:${answers.email}</li>
      <li id='info'class="list-group-item">Github:${answers.github}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link"></a>
      <a href="#" class="card-link"></a>
    </div>
  </div>`
    fs.appendFile("./dist/team.html", engineerHTML, (err) => err ? console.log(err) : console.log('successfully created card'))

};

const internHTML = (GenerateIntern) => {
    `
    <div class="card" style="width: 18rem;">
    
        <div class="card-body">
          <h5 class="card-title">${answers.name}</h5>
          <p class="card-text"><span class="iconify" data-icon="akar-icons:glasses" data-inline="false"></span> Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li id= 'info'class="list-group-item">id:${answers.id}</li>
          <li id='info'class="list-group-item">Email:${answers.email}</li>
          <li id='info'class="list-group-item">Github:${answers.github}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link"></a>
          <a href="#" class="card-link"></a>
        </div>
      </div>`
    fs.appendFile("./dist/team.html", internHTML, (err) => err ? console.log(err) : console.log('successfully created card'))
};

const generateTeam = () => {
    inquirer.prompt([
        {
            type: "confirm",
            name: "newMemeber",
            message: "Would you like to add another team memeber?",
            default: true,
        }]).then((answers) => {
            if (answers.newMemeber){
                generateManager();
            }else{
                console.log("ok, byeee")
            }
        })
};

generateTeam()
    //     } else {
    //         console.log('successfully created team member card');
    //    return;
    //     fs.appendFile('.dist/team.html',  (err) => err ? console.log(err) : ))


    // })};































// // // TODO: Include packages needed for this application

// // // TODO: Create an array of questions for user input
// // const questions = [];

// // // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}

// // // TODO: Create a function to initialize app
// // function init() {}

// // // Function call to initialize app
// // init();
