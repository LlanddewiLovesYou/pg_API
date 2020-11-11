const {
  PolicyCalculator,
} = require("../services/PolicyCalculator/PolicyCalculator");
const { User } = require("../services/User/User");

const getEstimates = (req, res) => {
  console.log(req);
  const userData = req.body;
  const user = new User(userData);
  const calculator = new PolicyCalculator(user);

  const price = calculator.calculatePrice();

  const priceResponse = {
    user,
    price,
  };
  res.send(priceResponse);
};

module.exports = { getEstimates };
