const { Discount } = require("../Discount/Discount");
const {
  BASE_PRICE,
  PRE_CONDITIONS,
  NO_PREEXISTING_CONDITIONS_STRING,
} = require("../constants");

class PolicyCalculator {
  constructor(user) {
    this.user = user;
    this.basePrice = BASE_PRICE;
    this.finalPrice = this.basePrice;
    this.discounts = new Discount(this.user);
  }

  calculatePrice() {
    this._makeAdjustments();
    return this.finalPrice;
  }

  _makeAdjustments() {
    this._applyAgeIncrease();
    this._applyPreConditionIncrease(this.user.condition);
    this._applyDiscounts();

    this.finalPrice = this.finalPrice.toFixed(2);
  }

  _applyAgeIncrease() {
    const yearsOver18 = this.user.age - 18;
    const adjustments = Math.floor(yearsOver18 / 5) * 20;
    this.finalPrice = this.finalPrice + adjustments;
  }

  _applyPreConditionIncrease(condition) {
    if (condition === NO_PREEXISTING_CONDITIONS_STRING) {
      return;
    } else {
      const percentage = PRE_CONDITIONS[condition];
      const conditionAdjustedPrice =
        this.finalPrice * percentage + this.finalPrice;
      this.finalPrice = conditionAdjustedPrice;
    }
  }

  _applyDiscounts() {
    const discounts = this.discounts.determineDiscounts();
    const discountedPrice = discounts.reduce(
      (acc, discount) => acc - discount,
      this.finalPrice
    );
    this.finalPrice = discountedPrice;
  }
}

module.exports = { PolicyCalculator };
