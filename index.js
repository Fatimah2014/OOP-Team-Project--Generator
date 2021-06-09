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
            message: "Please enter manager number:",
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
            validate: answers => {
                if (answers < 0) {
                    console.log("must enter manager office number!!!!")
                    return false;
                }
                return true;
            }
        }
    ]).then(answers => {

        const manager = new Manager(answers.name, answers.id, answers.email, answers.number)
        
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
                    console.log("Done")
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
        message: "Enter intern identification number",
    },
    {
        type: "input",
        name: "email",
        message: "Enter intern email:",
    },
    {
        type: "input",
        name: "school",
        message: "Enter intern school:"
    }]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
  
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
        message: "Enter engineer identification number",
    },
    {
        type: "input",
        name: "email",
        message: "Enter engineer email:",
    },
    {
        type: "input",
        name: "github",
        message: "Enter engineer github url:"
    }]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
     
        employeeArr.push(engineer);
        generateEmployees();
    })

};

const managerHTML = (generateManager) => {
    const answers = generateManager
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
    <div id= 'title' class="jumbotron">
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
          <li id= 'info' class="list-group-item">id:${answers.id}</li>
          <li id='info' class="list-group-item">Email:${answers.email}</li>
          <li id='info' class="list-group-item">Office Number:${answers.number}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link"></a>
          <a href="#" class="card-link"></a>
        </div>
`

    fs.writeFile("./dist/example.html", managerHTML, (err) => err ? console.log(err) : console.log('successfully created card'))
};




const engineerHTML = (generateEngineer) => {
    const answers = generateEngineer
     const print = `
<div class="card" style="width: 18rem;">

    <div class="card-body">
      <h5 class="card-title">${answers.name}</h5>
      <p class="card-text"><span class="iconify" data-icon="akar-icons:glasses" data-inline="false"></span> Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
      <li id= 'info' class="list-group-item">id:${answers.id}</li>
      <li id='info' class="list-group-item">Email:${answers.email}</li>
      <li id='info' class="list-group-item">Github:${answers.github}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link"></a>
      <a href="#" class="card-link"></a>
    </div>`
    fs.appendFile("./dist/example.html", print, (err) => err ? console.log(err) : console.log('successfully created card'))
};



const internHTML = (generateIntern) => {
    const answers = generateIntern
    `
    <div class="card" style="width: 18rem;">
    
        <div class="card-body">
          <h5 class="card-title">${answers.name}</h5>
          <p class="card-text"><span class="iconify" data-icon="akar-icons:glasses" data-inline="false"></span> Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li id= 'info' class="list-group-item">id:${answers.id}</li>
          <li id='info' class="list-group-item">Email:${answers.email}</li>
          <li id='info' class="list-group-item">Github:${answers.school}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link"></a>
          <a href="#" class="card-link"></a>
        </div>
      </div>`
    fs.appendFile("./dist/example.html", internHTML, (err) => err ? console.log(err) : console.log('successfully created card'))
};


const generateTeam = () => {
    inquirer.prompt([
        {
            type: "confirm",
            name: "newMember",
            message: "Would you like to add a team member?",
            default: true,
        }]).then((answers) => {
            if (answers.newMember){
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
