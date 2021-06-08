
const inquirer = require('inquirer')
const fs = require('fs')
const generateReadme = (github, email, title, date, quest1, quest2, quest3, quest4, install, usage,credits, license, test, contributions) =>
`# ${title}
### ${date}


# Description

>- ${quest1}
>- ${quest2}
>- ${quest3}
>- ${quest4}
---------
# Table of Content
- Installation

- Usage

- github

- Credits

- License 

- Contributions 

- Test

- Questions
------
# Installation
To install necessary dependencies, run the following command

>**${install}**
-------
# Usage
>**${usage}**
-------
# Credits
>**${credits}**
------
# License
${license} 
-----
# Contributing
>${contributions} 

# Test
To run a test run the following command:

>**${test}**

# questions
 If you have any questions about the Repo, open an issue or contact me directly at <${email}>. you can find more of my work at [GitHub](https://github.com/${github}).` 



inquirer.prompt([
    { type: 'input', 
      name: 'github',
      message: 'what is your Github Username?'},

    {type:'input', 
    name: 'email', 
    message: 'What is your email address?'},

    {type:'input', 
    name: 'title', 
    message: 'What is your Project name?'},

    {type:'input', 
    name: 'date', 
    message: 'What your project completion date?'},

    {type:'input', 
    name: 'quest1', 
    message: 'What is your was your motivation?'},

    {type:'input', 
    name: 'quest2', 
    message: 'Why did you build this project?'},
    
    {type:'input', 
    name: 'quest3', 
    message: 'What problems did you solve?'},
    
    {type:'input', 
    name: 'quest4', 
    message: 'What did you learn?'},




    {type: 'input',
    name: 'credits',
    message: "Please add Credits:"},

    {type:'list', 
    name: 'license', 
    message: 'What kind of license should your project have',
    choices: [
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
        "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"],
    },

    {type:'input', 
    name: 'install', 
    message: 'What should be run to install dependencies?'},

    {type:'input', 
    name: 'test', 
    message: 'What command should be run to run test?'},

    {type:'input', 
    name: 'usage', 
    message: 'What does the user need to know about using the repo?'},

    
{type: 'input',
     name: 'contributions',
     message: 'What does the user need to know about contributing to the repo?'}]).then(answers => {
    
       
        const { github, email, title, date, quest1, quest2, quest3, quest4, install, usage, credits, license, test, contributions} = answers
    console.log('github:',github)
    console.log('email:',email)
    console.log('title:',title)
    console.log('date:', date)
    console.log('quest1:', quest1)
    console.log('quest2:', quest2)
    console.log('quest3:', quest3)
    console.log('quest4:', quest4)
    console.log('install:',install)
    console.log('usage:',usage)
    console.log('credits:',credits)
    console.log('license:',license)
    console.log('test:',test)
    console.log('contributions:', contributions)

const readmeContent = generateReadme(github, email, title, date, quest1, quest2, quest3, quest4, install, usage, credits,license, test, contributions)
console.log('readmeContent:', readmeContent)
// fs.writeFile('README.md', readmeContent, )
fs.writeFile('README.md', readmeContent, (err) => err ? console.log(err) : console.log('successfully created README'))
})

// promptUser();