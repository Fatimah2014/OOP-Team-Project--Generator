const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name,id,email);
        this.position= "Intern";
        this.school = school;
    }
    getPosition() {
            return this.position;
    

    } 
    getGithub() {
        return this.github;
        }
    }      
    
module.exports = Intern;

