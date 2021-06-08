const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github, position) {
        super(name,id,email);
        this.position = "Engineer";
        this.github = github;
    }
    getPosition () {
        return "Engineer";
    
    } 
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;
