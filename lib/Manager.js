

const Employee = require('./Employee');



class Manager extends Employee {
    constructor(name, id, email, number ) {
        super(name,id,email);
        this.position = "Manager";
        this.number = number;
    }
    getposition() {
        return "Manager";
    }

    
    getnumber() {
        return this.number;
        }
    }
module.exports = Manager;
