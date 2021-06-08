

const Employee = require('./employee');



class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name,id,email);
        this.position = "Manager";
        this.number = number;
    }
    getPosition() {
        return this.position;
    }

    
    getNumber() {
        return this.number;
        }
    }
module.exports = Manager;
