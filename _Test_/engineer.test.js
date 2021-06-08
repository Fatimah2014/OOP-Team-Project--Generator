const Engineer = require("../lib/engineer")

describe("Engineer Class test all", () => {
    const engineer = new Engineer("Fatimah", 5, "qadir_fatimah@yahoo.com")
    it("apply name function returns the name", () => {
        expect(engineer.getName()).toBe("Fatimah")
        
    })
    it("return email when email is passed", () => {
        expect(engineer.getEmail()).toBe("qadir_fatimah@yahoo.com")
        
    })
})