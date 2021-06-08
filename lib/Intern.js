const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, github, position) {
        super(name,id,email);
        this.role = "Intern";
        this.github = github;
    }
    getposition() {
            return "Intern";
    

    } 
    getGithub() {
        return this.github;
        }
    }      
    
module.exports = Intern;

