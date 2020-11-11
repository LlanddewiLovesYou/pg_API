const { NO_PREEXISTING_CONDITIONS_STRING } = require("../../constants");
const { App } = require("../App");
const { PolicyCalculator } = require("../../PolicyCalculator/PolicyCalculator");
const { User } = require("../../User/User");

const setupTestApp = (userArgs) => {
  const testApp = new App();
  testApp._gatherUserData = jest.fn().mockReturnValue(userArgs);
  testApp._createNewCalculator = jest
    .fn()
    .mockReturnValue(new PolicyCalculator(userArgs));
  testApp._print = jest.fn().mockImplementation((items) => console.log(items));
  console.log = jest.fn();
  return testApp;
};

describe("class App", () => {
  let defaultUserArgs = {
    age: 18,
    gender: "m",
    condition: NO_PREEXISTING_CONDITIONS_STRING,
  };
  describe("App.run", () => {
    describe("when there is a problem with  the user input", () => {
      let testApp;
      beforeEach(() => {
        const userArgs = undefined;

        testApp = setupTestApp(userArgs);
      });
      it("simply returns, without calculating the price", async () => {
        await testApp.run();

        expect(testApp._createNewCalculator).not.toHaveBeenCalled();
      });
    });

    describe("when there is no problem with the user input", () => {
      let testApp;
      beforeEach(() => {
        testApp = setupTestApp(defaultUserArgs);
      });
      it("instantiates a new PolicyCalculator and begins the calculation", async () => {
        await testApp.run();

        expect(testApp._createNewCalculator).toHaveBeenCalledWith(
          defaultUserArgs
        );
      });
      it("prints a report with the policy estimate", async () => {
        await testApp.run();

        expect(testApp._print).toHaveBeenCalled();
      });
    });
  });
});
