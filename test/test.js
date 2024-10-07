/**
 * We have to do a bit of work upfront to allow the tests
 * to run in the browser and in Node.js. 
 */
let assert, expect;
if (typeof window === 'object') {
    // Ensure chai is available in the browser environment
    if (typeof chai === 'undefined') {
        throw new Error('Chai is not loaded. Please ensure chai.js is included in your HTML file.');
    }
}
let testItems = {};
if (typeof window === 'object') {
    // Run tests in browser
    assert = chai.assert;
    expect = chai.expect;
    mocha.setup('bdd');
    testItems = {
        // Variables
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
} else {
    // Run tests in Node.js
    assert = require('assert');
    expect = require('chai').expect;
    testItems = require('../assignment/scripts/aboutMe.js');
}

/**
 * Put all tests within this describe.
 */
describe('Automated tests', function () {
    describe(`First Name assigned to String`, function () {
        it(`First Name assigned to String`, function () {
            let { firstName } = testItems;
            expect(firstName, 'Expected firstName to be a string').to.exist;
            expect(firstName).to.be.a('string');
            expect(firstName.length, 'Expected firstName to have a value').to.be.greaterThan(0);
        });
    });
    describe(`Last Name assigned to String`, function () {
        it(`Last Name assigned to String`, function () {
            let { lastName } = testItems;
            expect(lastName, 'Expected lastName to be a string').to.exist;
            expect(lastName).to.be.a('string');
            expect(lastName.length).to.be.greaterThan(0);
        });
    });
    describe(`Full Name assigned to String`, function () {
        it(`Full Name assigned to String`, function () {
            let { fullName, firstName, lastName } = testItems;
            expect(fullName, 'Expected fullName to be a string').to.exist;
            expect(fullName).to.be.a('string');
            expect(fullName.length).to.be.greaterThan(0);
            expect(fullName.includes(firstName), 'Expected fullName to include firstName').to.equal(true);
            expect(fullName.includes(lastName), 'Expected fullName to include lastName').to.equal(true);
        });
    });
    describe(`Lucky Number assigned to Number`, function () {
        it(`Lucky Number assigned to Number`, function () {
            let { luckyNumber } = testItems;
            expect(luckyNumber, 'Expected luckyNumber to be a number').to.exist;
            expect(luckyNumber).to.be.a('number');
        });
    });
    describe(`Introduction assigned to String`, function () {
        it(`Introduction assigned to String`, function () {
            let { introduction, fullName, luckyNumber } = testItems;
            expect(introduction, 'Expected introduction to be a string').to.exist;
            expect(introduction).to.be.a('string');
            expect(introduction.length).to.be.greaterThan(0);
            expect(introduction.includes(fullName), 'Expected introduction to include full name.').to.equal(true);
            expect(introduction.includes(luckyNumber), 'Expected introduction to include lucky number.').to.equal(true);
        });
    });
    describe(`Adventurous assigned to Boolean`, function () {
        it(`Adventurous assigned to Boolean`, function () {
            let { adventurous } = testItems;
            expect(adventurous, 'Expected introduction to be a boolean').to.exist;
            expect(adventurous).to.be.a('boolean');
        });
    });
    describe(`Food assigned to a String`, function () {
        it(`Food assigned to a String`, function () {
            let { food } = testItems;
            expect(food, 'Expected food to be a string').to.exist;
            expect(food).to.be.a('string');
        });
    });
    describe(`Pets assigned to Number`, function () {
        it(`Pets assigned to Number`, function () {
            let { pets } = testItems;
            expect(pets, 'Expected pets to be a number').to.exist;
            expect(pets).to.be.a('number');
        });
    });
    describe(`Friends Pets assigned to Number`, function () {
        it(`Friends Pets assigned to Number`, function () {
            let { friendsPets } = testItems;
            expect(friendsPets, 'Expected friendsPets to be a number').to.exist;
            expect(friendsPets).to.be.a('number');
        });
    });
    describe(`Allowed Pets assigned to a constant`, function () {
        it(`Allowed Pets assigned to a constant`, function () {
            let { allowedPets } = testItems;
            expect(allowedPets, 'Expected allowedPets to be a number').to.exist;
            expect(allowedPets).to.be.a('number');
        });
    });
    describe(`Result is assigned to a string`, function () {
        it(`Result is assigned to a string`, function () {
            let { result, adventurous } = testItems;
            expect(result).to.be.a('string');
            if (adventurous) {
                expect(result).to.equal('Adventures are great!');
            } else {
                expect(result).to.equal('How about we stay home?');
            }
        });
    });
    describe(`Dice roll is assigned to a string`, function () {
        it(`Dice roll is assigned to a string`, function () {
            let { diceRoll, luckyNumber, adventurous } = testItems;
            expect(diceRoll).to.be.a('string');
            if (luckyNumber === 2 && adventurous) {
                expect(diceRoll).to.equal('Roll the dice!');
            } else {
                expect(diceRoll).to.equal('Try again later.');
            }
        });
    });
    describe(`Pet status is assigned to the correct value`, function () {
        it(`Pet status is assigned to the correct value`, function () {
            let { petStatus, pets, allowedPets } = testItems;
            expect(petStatus).to.be.a('string');
            if (pets === allowedPets) {
                expect(petStatus).to.equal('I have enough pets');
            } else if (pets < allowedPets) {
                expect(petStatus).to.equal('I can have more pets');
            } else if (pets > allowedPets) {
                expect(petStatus).to.equal('Oh no, I have too many pets!');
            }
        });
    });
    describe(`STRETCH: Most pets is assigned to the correct value`, function () {
        it(`STRETCH: Most pets is assigned to the correct value`, function () {
            let { mostPets } = testItems;
            if (mostPets === undefined) {
                this.skip()
            } else {
                let { mostPets, pets, friendsPets } = testItems;
                expect(mostPets).to.be.a('number');
                if (friendsPets > pets) {
                    expect(mostPets).to.equal(friendsPets);
                } else {
                    expect(mostPets).to.equal(pets);
                }
            }
        });
    });
    describe(`STRETCH: luckyResult is assigned to the correct value`, function () {
        it(`STRETCH: luckyResult is assigned to the correct value`, function () {
            let { luckyResult } = testItems;
            if (luckyResult === undefined) {
                this.skip()
            } else {
                let { luckyNumber, luckyResult } = testItems;
                expect(luckyNumber).to.be.a('number');
                expect(luckyResult).to.be.a('string');
                if(luckyNumber === 1) {
                    expect(luckyResult).to.equal('First is the worst')
                }
                else if(luckyNumber === 2) {
                    expect(luckyResult).to.equal('Second is the best')
                } else if (luckyNumber === 3) {
                    expect(luckyResult).to.equal('Third is the one with the polka dot dress')
                } else {
                    expect(luckyResult).to.equal('Luck is what happens when preparation meets opportunity')
                }
            }
        });
    });
});

/**
 * If running the tests in the browser, call mocha.run()
 */
if (typeof window === 'object') {
    mocha.run();
}
