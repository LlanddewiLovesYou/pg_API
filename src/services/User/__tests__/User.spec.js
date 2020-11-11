const { User } = require("../User");

describe("class User", () => {
  let testUser;
  let args;
  describe("new User()", () => {
    beforeEach(() => {
      args = { age: 18, gender: "f", condition: "allergies" };
      testUser = new User(args);
    });
    it("sets the users age correctly", () => {
      expect(testUser.age).toEqual(18);
    });
    it("sets the users gender correctly", () => {
      expect(testUser.gender).toEqual("f");
    });
    it("sets the users condition correctly", () => {
      expect(testUser.condition).toEqual("allergies");
    });
  });
});
