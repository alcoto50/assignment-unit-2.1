// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'Alvin';
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'Cotton';
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
//     (remember, you already have variables for this, can you use those?)
//     Console log the value of `fullName`
let fullName = firstName + ' ' + lastName;
// 4 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
//     Console log the value of `luckyNumber`
var luckyNumber = 7;
// 5 - Create a variable `introduction` and using the variables from above,
//     give it the value of:
//     'My name is (full name), and I think (lucky number) is a winner!'.
//     Refer back to the videos if you need help with this one.
//     Console log the value of `introduction`
var introduction = 'My name is ' + fullName + ', and I think ' + luckyNumber + ' is a winner!';
// 6 - Create a variable named `adventurous` and set it to a boolean value (true or false)
//     Console log the value of `adventurous`
var adventurous = true;
// 7 - Create a variable named `food`, and set its value to a string of your favorite food
//     Console log the value of `food`
var food = 'pizza';
// 8 - Create a variable called `pets` and set it to the value of the number of pets you have
//     Console log the value of `pets`
var pets = 1;
// 9 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
var friendspets= 2;
// 10 - Add two pets to your `pets` variable
pets +2;
// 11 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 3;
// 12 - Create a variable called `result`. Create a conditional:
//      if adventurous is true, set `result` to be "Adventures are great!", 
//      if it's not true,  set `result` to be "How about we stay home?"
//      Console log the value of `result`
var result;
if (adventurous) {
  result = 'Adventures are great!';
} else {
  result = 'How about we stay home?';
}
// 13 - Create a variable called `diceRoll` and set it to the value of "Try again later.".
//      Create a compound conditional: 
//      if luckyNumber is 2 and adventurous is true,
//      set `diceRoll` to be "Roll the dice!"
//      Console log the value of `diceRoll`
var diceRoll = 'Try again later.'
if (luckyNumber === 2 && adventurous ===true){
  diceRoll = 'Roll the dice!';
}
// 14 - Create a variable called `petStatus`. 
//      Write a conditional that covers the following:
//      if the value of `pets` is less than the value of `allowedPets`,
//      set `petStatus` to the value of "I can have more pets" 
//      if the value of `pets` is equal to the value of `allowedPets`,
//      set `petStatus` to the value of "I have enough pets" 
//      if the value of `pets` is greater than the value of `allowedPets`.
//      set `petStatus` to the value of "Oh no, I have too many pets!"
var petStatus = 'I can have more pets' || 'I have enough pets'|| 'oh no, I have too many pets!';
if (pets < allowedPets){
  petStatus = 'I can have more pets';
} if (pets === allowedPets){'I have enough pets';
} if (pets > allowedPets){'Oh no, I have too many pets!';
}
// STRETCH GOALS:

// 15 - Make a variable called `mostPets` and a conditional that
//      correctly checks the `pets` and `friendsPets` variables, and
//      assigns the highest value to `mostPets`. There's several possibilities --
//      be sure to think through all the scenarios. 
//      console.log `mostPets` after the conditional has run.

// 16 - Make a variable called `luckyResult`
//      Write a *switch* statement that sets `luckyResult` to:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!
//      console.log `luckyResult` after the conditional has run.

// 17 -- Rewrite question 12 with a `ternary` operator. You'll need to do research!











// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    firstName: typeof firstName !== 'undefined' ? firstName : undefined,
    lastName: typeof lastName !== 'undefined' ? lastName : undefined,
    fullName: typeof fullName !== 'undefined' ? fullName : undefined,
    luckyNumber: typeof luckyNumber !== 'undefined' ? luckyNumber : undefined,
    introduction: typeof introduction !== 'undefined' ? introduction : undefined,
    adventurous: typeof adventurous !== 'undefined' ? adventurous : undefined,
    food: typeof food !== 'undefined' ? food : undefined,
    pets: typeof pets !== 'undefined' ? pets : undefined,
    friendsPets: typeof friendsPets !== 'undefined' ? friendsPets : undefined,
    allowedPets: typeof allowedPets !== 'undefined' ? allowedPets : undefined,
    result: typeof result !== 'undefined' ? result : undefined,
    diceRoll: typeof diceRoll !== 'undefined' ? diceRoll : undefined,
    petStatus: typeof petStatus !== 'undefined' ? petStatus : undefined,
    mostPets: typeof mostPets !== 'undefined' ? mostPets : undefined,
    luckyResult: typeof luckyResult !== 'undefined' ? luckyResult : undefined,
  };
} catch (e) {
  // Do nothing
}