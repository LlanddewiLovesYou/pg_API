const { Discount } = require("../Discount");
const { User } = require("../../User/User");
const { FEMALE_LIFE_EXPECTANCY_DISCOUNT } = require("../../constants");

describe("class Discount", () => {
  let userArgs;
  let testUser;
  let testDiscount;

  describe("new Discount()", () => {
    beforeEach(() => {
      userArgs = { age: 18, gender: "m", condition: "allergies" };
      testUser = new User({ userArgs });
      testDiscount = new Discount(testUser);
    });
    it("sets the discounts user correctly", () => {
      expect(testDiscount.user).toEqual(testUser);
    });
    it("inits the discounts femaleLifeExpectancy to the correct amount", () => {
      expect(testDiscount.femaleLifeExpectancy).toEqual(
        FEMALE_LIFE_EXPECTANCY_DISCOUNT
      );
    });
    it("inits the discounts totalDiscounts to an empty array", () => {
      expect(testDiscount.totalDiscounts).toEqual([]);
    });
  });

  describe("Discount.determineDiscounts", () => {
    describe("when the user is not female", () => {
      beforeEach(() => {
        userArgs = { age: 18, gender: "m", condition: "allergies" };
        testUser = new User(userArgs);
        testDiscount = new Discount(testUser);
      });
      it("returns an empty array", () => {
        const discount = testDiscount.determineDiscounts();

        expect(discount).toEqual([]);
      });
    });

    describe("when the user is female", () => {
      beforeEach(() => {
        userArgs = { age: 18, gender: "f", condition: "allergies" };
        testUser = new User(userArgs);
        testDiscount = new Discount(testUser);
      });
      it("returns an array that includes the life expectancy discount inside", () => {
        const discount = testDiscount.determineDiscounts();

        expect(discount.includes(FEMALE_LIFE_EXPECTANCY_DISCOUNT)).toBe(true);
      });
    });
  });
});
