const { GENDER, PRE_CONDITIONS_NAMES } = require("../constants");

class Validator {
  validateUserInput(type, input) {
    switch (type) {
      case "age":
        return this._validateAge(input);
      case "gender":
        return this._validateGender(input);
      case "condition":
        return this._validatePreConditions(input);
    }
  }

  _validateAge(age) {
    if (parseInt(age) === NaN) {
      return "false";
    } else {
      return 18 <= parseInt(age) ? true : false;
    }
  }

  _validateGender(gender) {
    return GENDER.includes(gender.toLowerCase());
  }

  _validatePreConditions(condition) {
    return PRE_CONDITIONS_NAMES.includes(condition.toLowerCase());
  }
}

module.exports = { Validator };
