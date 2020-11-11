const { FEMALE_LIFE_EXPECTANCY_DISCOUNT } = require("../constants");

class Discount {
  constructor(user) {
    this.user = user;
    this.femaleLifeExpectancy = FEMALE_LIFE_EXPECTANCY_DISCOUNT;
    this.totalDiscounts = [];
  }

  determineDiscounts() {
    this._getFemaleLifeExpectancyDiscount(this.user);
    return this.totalDiscounts;
  }

  _getFemaleLifeExpectancyDiscount(user) {
    if (user.gender === "f") {
      this.totalDiscounts.push(this.femaleLifeExpectancy);
    }
  }
}

module.exports = { Discount };
