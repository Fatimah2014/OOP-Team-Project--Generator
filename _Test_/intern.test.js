
const Intern = require("../lib/intern")

describe("Intern Class test all", () => {
    const intern = new Intern("Fatimah", 5, "qadir_fatimah@yahoo.com")
    it("apply name function returns the name", () => {
        expect(intern.getName()).toBe("Fatimah")
        
    })
    it("return email when email is passed", () => {
        expect(intern.getEmail()).toBe("qadir_fatimah@yahoo.com")
        
    })
})