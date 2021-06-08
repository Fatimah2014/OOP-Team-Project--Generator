const Employee = require("../lib/employee")

describe("Employee Class test all", () => {
    const employee = new Employee("Fatimah", 5, "qadir_fatimah@yahoo.com")
    it("apply name function returns the name", () => {
        expect(employee.getName()).toBe("Fatimah")
        
    })
    it("return email when email is passed", () => {
        expect(employee.getEmail()).toBe("qadir_fatimah@yahoo.com")
        
    })
})