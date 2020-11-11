const { User } = require("../User/User");
const { PolicyCalculator } = require("../PolicyCalculator/PolicyCalculator");
const { Validator } = require("../Validator/Validator");
const prompt = require("prompt-sync")({
  sigint: true,
});
const {
  NO_PREEXISTING_CONDITIONS_STRING,
  GREET_STRING,
  AGE_PROMPT,
  AGE_ERROR_MESSAGE,
  GENDER_QUERY,
  GENDER_ERROR_MESSAGE,
  CONDITION_PROMPT,
  TICKLE_PRICE_READOUT_STRING,
} = require("../constants");

class App extends Validator {
  run() {
    this._greet();

    const userData = this._gatherUserData();

    if (!userData) {
      return;
    } else {
      const calculator = this._createNewCalculator(userData);

      const estimate = calculator.calculatePrice();

      this._print(userData, estimate);
    }
  }

  _print(userData, estimate) {
    console.log(
      "\n",
      "\n",
      TICKLE_PRICE_READOUT_STRING,
      "\n",
      "\n",
      `Policy price for a(n) ${userData.age} year old ${userData.gender}, with ${userData.condition}: ${estimate}(UST)`,
      "\n",
      "\n",
      "* all claims paid in United States Tacos "
    );
  }

  _greet() {
    console.log("\n", GREET_STRING, "\n");
  }

  _gatherUserData() {
    const age = prompt(AGE_PROMPT);

    if (!this.validateUserInput("age", age)) {
      console.log(AGE_ERROR_MESSAGE);
      return;
    }
    const gender = prompt(GENDER_QUERY, "");
    if (!this.validateUserInput("gender", gender)) {
      console.log(GENDER_ERROR_MESSAGE);
      return;
    }
    const condition = prompt(
      CONDITION_PROMPT,
      NO_PREEXISTING_CONDITIONS_STRING
    );

    if (!this.validateUserInput("condition", condition)) {
      console.log("invalid condition");
      return;
    }

    const userData = new User({ age, gender, condition });

    return userData;
  }

  _createNewCalculator(userData) {
    return new PolicyCalculator(userData);
  }
}

module.exports = { App };
