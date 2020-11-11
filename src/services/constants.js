const GENDER = ["m", "f", "nb", ""];

const FEMALE_LIFE_EXPECTANCY_DISCOUNT = 12;

const NO_PREEXISTING_CONDITIONS_STRING = "no pre-existing conditions";

const PRE_CONDITIONS = {
  allergies: 0.01,
  "sleep apnea": 0.06,
  "heart disease": 0.17,
  [NO_PREEXISTING_CONDITIONS_STRING]: 1,
};

const PRE_CONDITIONS_NAMES = Object.keys(PRE_CONDITIONS);

const BASE_PRICE = 100;

const TICKLE_PRICE_READOUT_STRING =
  "____________T.I.C.K.L.E. FINAL PRICE____________";

const GREET_STRING =
  "Hello! Thanks for looking into T.I.C.K.L.E. for all your Taco-based healthcare needs!";

const AGE_PROMPT = "What is your age?  ";
const AGE_ERROR_MESSAGE =
  "'Age is just a number...' so remember to only enter numbers in this field! Also, only persons 18+ years of age are elligible for a T.I.C.K.L.E. policy";

const GENDER_QUERY =
  "What is your Gender? m/f/nb (or just press enter if you'd prefer not to say) ";
const GENDER_ERROR_MESSAGE =
  "T.I.C.K.L.E. celebrates making Taco-based insurance available to people of all Gender Identities. If you don't see yourself represented in our current services please give us a call at 1-800-TICKLE-CARES to speak with a representative who can help you with any specific inquiries";

const CONDITION_PROMPT =
  "Do you suffer from any of the following?: Allergies, Sleep Apnea, Heart disease (or press enter for 'none of the above') ";

module.exports = {
  CONDITION_PROMPT,
  GENDER_ERROR_MESSAGE,
  GENDER_QUERY,
  AGE_ERROR_MESSAGE,
  AGE_PROMPT,
  GENDER,
  PRE_CONDITIONS,
  BASE_PRICE,
  PRE_CONDITIONS_NAMES,
  FEMALE_LIFE_EXPECTANCY_DISCOUNT,
  NO_PREEXISTING_CONDITIONS_STRING,
  TICKLE_PRICE_READOUT_STRING,
  GREET_STRING,
};
