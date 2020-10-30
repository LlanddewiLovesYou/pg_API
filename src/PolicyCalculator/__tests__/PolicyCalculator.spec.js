const { PolicyCalculator } = require("../PolicyCalculator");
const { User } = require("../../User/User");
const { Discount } = require("../../Discount/Discount");
const {
  NO_PREEXISTING_CONDITIONS_STRING,
  BASE_PRICE,
} = require("../../constants");

const setUpTestPolicyCalculator = (userArgs) => {
  const user = new User(userArgs);
  const discount = new Discount(user);
  const calculator = new PolicyCalculator(user);
  calculator._print = jest.fn();
  return { calculator, user, discount };
};

describe("class PolicyCalculator", () => {
  describe("new PolicyCalculator()", () => {
    beforeEach(() => {
      userArgs = {
        age: 18,
        gender: "f",
        condition: NO_PREEXISTING_CONDITIONS_STRING,
      };
    });
    it("sets the user correctly", () => {
      const { calculator, user } = setUpTestPolicyCalculator(userArgs);

      expect(calculator.user).toEqual(user);
    });

    it("inits the base price correctly", () => {
      const { calculator } = setUpTestPolicyCalculator(userArgs);

      expect(calculator.basePrice).toBe(BASE_PRICE);
    });

    it("inits the final price to the base price", () => {
      const { calculator } = setUpTestPolicyCalculator(userArgs);

      expect(calculator.finalPrice).toBe(BASE_PRICE);
    });

    it("inits the discounts to a new discount", () => {
      const { calculator, discount } = setUpTestPolicyCalculator(userArgs);

      expect(calculator.discounts).toEqual(discount);
    });
  });

  describe("PolicyCalculator.calculatePrice", () => {
    describe("age increases", () => {
      it("adds $20 to the final price for every 5 years over age 18", () => {
        let calculator;
        userArgs = {
          age: 28,
          gender: "m",
          condition: NO_PREEXISTING_CONDITIONS_STRING,
        };
        calculator = setUpTestPolicyCalculator(userArgs).calculator;

        calculator.calculatePrice();

        expect(calculator.finalPrice).toEqual((140).toFixed(2));

        userArgs = {
          age: 33,
          gender: "m",
          condition: NO_PREEXISTING_CONDITIONS_STRING,
        };
        calculator = setUpTestPolicyCalculator(userArgs).calculator;

        calculator.calculatePrice();

        expect(calculator.finalPrice).toEqual((160).toFixed(2));
      });
    });

    describe("condition increases", () => {
      describe("when there is no condition", () => {
        it("adds nothing to the final price", async () => {
          userArgs = {
            age: 18,
            gender: "m",
            condition: NO_PREEXISTING_CONDITIONS_STRING,
          };
          const { calculator } = setUpTestPolicyCalculator(userArgs);

          await calculator.calculatePrice();

          expect(calculator.finalPrice).toEqual((100).toFixed(2));
        });
      });
      describe("when the condition is allergies", () => {
        it("adds 1% of the current final price, to the final price", async () => {
          userArgs = {
            age: 18,
            gender: "m",
            condition: "allergies",
          };
          const { calculator } = setUpTestPolicyCalculator(userArgs);

          await calculator.calculatePrice();

          expect(calculator.finalPrice).toEqual((101).toFixed(2));
        });
      });
      describe("when the condition is sleep apnea", () => {
        it("adds 6% of the current final price, to the final price", async () => {
          userArgs = {
            age: 18,
            gender: "m",
            condition: "sleep apnea",
          };
          const { calculator } = setUpTestPolicyCalculator(userArgs);

          await calculator.calculatePrice();

          expect(calculator.finalPrice).toEqual((106).toFixed(2));
        });
      });
      describe("when the condition is heart disease", () => {
        it("adds 6% of the current final price, to the final price", async () => {
          userArgs = {
            age: 18,
            gender: "m",
            condition: "heart disease",
          };
          const { calculator } = setUpTestPolicyCalculator(userArgs);

          await calculator.calculatePrice();

          expect(calculator.finalPrice).toEqual((117).toFixed(2));
        });
      });
    });

    describe("discounts", () => {
      describe("when the user is female", () => {
        it("applys the female life expectancy discount of -$12 to the final price", async () => {
          userArgs = {
            age: 18,
            gender: "f",
            condition: NO_PREEXISTING_CONDITIONS_STRING,
          };
          const { calculator } = setUpTestPolicyCalculator(userArgs);

          await calculator.calculatePrice();

          expect(calculator.finalPrice).toEqual((88).toFixed(2));
        });
      });
      describe("when the user is not female", () => {
        it("does not apply the female life expectancy discount of -$12 to the final price", async () => {
          userArgs = {
            age: 18,
            gender: "m",
            condition: NO_PREEXISTING_CONDITIONS_STRING,
          };
          const { calculator } = setUpTestPolicyCalculator(userArgs);

          await calculator.calculatePrice();

          expect(calculator.finalPrice).toEqual((100).toFixed(2));
        });
      });
    });
  });
});
