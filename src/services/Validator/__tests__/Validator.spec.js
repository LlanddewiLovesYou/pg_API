const { Validator } = require("../Validator");

describe("class Validator", () => {
  let testValidator;
  describe("Validator.validateUserInput", () => {
    beforeEach(() => {
      testValidator = new Validator();
    });
    describe("age validation", () => {
      describe("when the input is not a number", () => {
        it("returns false", () => {
          const validation = testValidator.validateUserInput(
            "age",
            "twenty-one"
          );
          expect(validation).toBe(false);
        });
      });
      describe("when the input is less than 18", () => {
        it("returns false", () => {
          const validation = testValidator.validateUserInput("age", "17");

          expect(validation).toBe(false);
        });
      });
      describe("when the in put is a number over 18", () => {
        it("return true", () => {
          const validation = testValidator.validateUserInput("age", "18");

          expect(validation).toBe(true);
        });
      });
    });

    describe("gender string validation", () => {
      describe("when the input is one of current options", () => {
        it("returns true", () => {
          const validation = testValidator.validateUserInput("gender", "f");

          expect(validation).toBe(true);
        });
      });

      describe("when the input is not one of the current options", () => {
        it("returns false", () => {
          const validation = testValidator.validateUserInput("gender", "<3");

          expect(validation).toBe(false);
        });
      });

      describe("when no input is given", () => {
        it("returns true", () => {
          const validation = testValidator.validateUserInput("gender", "");

          expect(validation).toBe(true);
        });
      });
    });

    describe("condition string validation", () => {
      describe("when the condition is one of the current list of pre-existing conditions", () => {
        it("returns true", () => {
          const validation = testValidator.validateUserInput(
            "condition",
            "allergies"
          );

          expect(validation).toBe(true);
        });
        describe("when the input is capitalized", () => {
          it("still returns true", () => {
            const validation = testValidator.validateUserInput(
              "condition",
              "Allergies"
            );

            expect(validation).toBe(true);
          });
        });
      });

      describe("when the condition is NOT one of the current list of pre-existing conditions", () => {
        it("returns false", () => {
          const validation = testValidator.validateUserInput(
            "condition",
            "taco fever"
          );

          expect(validation).toBe(false);
        });
      });
    });
  });
});
