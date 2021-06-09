const Manager = require("../lib/manager")

describe("Manager Class test all", () => {
    const manager = new Manager("Fatimah", 5,"qadir_fatimah@yahoo.com")
    it("apply name function returns the name", () => {
        expect(manager.getName()).toBe("Fatimah")
        
    })
    it("return Id when Id is passed", () => {
        expect(manager.getEmail()).toBe("qadir_fatimah@yahoo.com")
        
    })

    it("apply name function returns the name", () => {
        expect(manager.getName()).toNotBe("Noah")
        
    })
})
