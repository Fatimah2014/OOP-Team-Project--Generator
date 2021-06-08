const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name,id,email);
        this.Position = "Engineer";
        this.github = github;
    }
    getPosition () {
        return this.position;
    
    } 
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;
