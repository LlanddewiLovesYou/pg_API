## Ian Del Duca

# Policy Genius coding challenge!

Hello! Thanks for looking over my submission. Had a lot of fun working on this one, I hope you like it.

### Let's get you set up...

1. First unzip the folder with your favorite unzipping utility!
2. Install dependencies by running `npm i`. (This installs `jest` the testing framework and also a library called `prompt-sync` which helps gather user input from the terminal in a seemingly syncronous manner.)
3. That should be it!

### Running the app:

To run the app simply run `npm run tickle-me` from your terminal

Once the app is running you'll be prompted for your age, gender and any pre-exisitng conditions you may have. I am pretty sure I have covered all of the validations and have error messages that should help you if things go wrong, but just in case:

1. Age - This needs to a numeric value greater than 18
2. Gender - a string of `m`, `f`, or `nb` are currently the only valid inputs. Alternatively, entering nothing and pressing enter is also a valid input for folx who either do not currently see themselves represented or prefer not to specify. In this case the app assumes the applicant does NOT qualify for the "Life expectancy" discount. (The app tries to take great care to be as inclusive as possible and this is easily changed on further refinement of the spec)
3. Conditions - This needs to be a string matching **one** of the following: `allergies`, `sleep apnea`, or `heart disease`. I've made sure to account for possible capitalizations of each. I spent some time wondering if asking for whole words was really what I wanted to do (as opposed to maybe asking for a corresponding numeric value). I went with this choice with the understanding that we might want to expand the app in future and so it's probably a better UI/UX to simply ask what conidtions a user might have rather than having to list out dozens of choices in future.

And Voila! The app should then provide a readout to the terminal with the correct information.

### Tests:

To run the tests simply run `npm test` from the terminal.

**NOTE:** This is set to run in `--verbose` mode, so you should see all the of the test suite display all of their tests and results for convenience. Probably wouldn't do this for a real app, but I thought it might be better/easier for review purposes.

### Other things for reference...

There are 5 classes: `App`, `User`, `PolicyCalculator`, `Discount`, and `Validator`.

#### `App`

This class has a single public method `run` which handles gathering user input, initiating the calculation, as well as the final readout. It also extends the `Validator` class so that it can handle the validation of user input.

#### `Validator`

This class has a single public method to validate user input. Currently it an only handle `age`, `gender`, and `condition` fields but should be a extensible to handle whatever we might want to validate in future. This method was originally part of the App class but I borke it so we could reuse the logic elsewhere if needed in future.

#### `User`

This class just creates a `User` object. Eventually we may want to use it for features as the app grows but as of right now it has no public API.

#### `PolicyCalculator`

This class takes in a `User` on initialization and has a single public method (`calculatePrice`) which is responsible for correctly adjusting for age, pre-exisitng conditions, and applying any applicable `Discount`'s to the final price.

#### `Discount`

Finally, this class takes in a `User` on initialization and has a single public method called `determineDiscounts` which returns an array of various discounts which the `PolicyCalculator` can subtract from the final estimate. Of course as of right now, it only returns an array of one item being that we have only one discount. But again, it should be set up to handle any other discounts we might want to offer in the future.

#### In Conclusion...

Thanks again for taking the time to look this over and for considering me for the open role. If there is anything that needs further clarification please feel free to reach out to me at any time. You can get my contact info by running `npm i -g iandelduca` in your terminal. Feedback is _always_ appreciated, regardless of the outcome of this process, so don't be shy!

Looking forward to hearing from you soon!
--Ian
