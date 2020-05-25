
//Test driven means that you decide on what the out come is, then write a function and then test to make sure it works

// const { expect } = require("chai");
// const { addNumbers } = require("../src/Common/Numbers");

// describe("testing the numbers module", () => {
//     describe("testing the addNumbers function", () => {
//         it("should return the sum of two numbers", () => {
//             expect(addNumbers(12, 14)).to.eql(26);
//         });
//         it("should handle decimal numbers", () => {
//             expect(addNumbers(12.14, 14)).to.eql(26.14);
//         });
//         it("should handle negative numbers", () => {
//             expect(addNumbers(-12, 14)).to.eql(2);
//         });
//         it("should throw an error if either parameter is not a number", () => {
//             expect(() => addNumbers("A", "B")).to.throw();
//             expect(() => addNumbers(1, "B")).to.throw();
//             expect(() => addNumbers("A", 2)).to.throw();
//         });
//         it("should work for strings if they can be parsed as numbers", () => {
//             expect(addNumbers("12", 14)).to.eql(26);
//             expect(addNumbers("12.14", 14)).to.eql(26.14);
//             expect(addNumbers("-12", 14)).to.eql(2);
//         });
//         it("should throw an error when no numbers are passed in", () => {
//             expect(() => addNumbers()).to.throw();
//         });
//         it("should throw an error when one number is passed in", () => {
//             expect(() => addNumbers(1)).to.throw();
//         });
//     });
// });

// when running the terminal you need to call npx mocha
// Output: 
// testing the numbers module
// testing the addNumbers function
//   √ should return the sum of two numbers
//   √ should handle decimal numbers
//   √ should handle negative numbers
//   √ should throw an error if either parameter is not a number
//   √ should work for strings if they can be parsed as numbers
//   √ should throw an error when no numbers are passed in
//   √ should throw an error when one number is passed in


// 7 passing (16ms)

const { expect } = require("chai");
const { multipleNumbers } = require("../src/Common/Numbers");

describe("testing the numbers module", () => {
    describe("testing the multipleNumbers function", () => {
        it("should return the sum of two numbers multpled", () => {
            expect(multipleNumbers(10, 5)).to.eql(50);
        });
        it("should handle decimal numbers", () => {
            expect(multipleNumbers(10.5, 5)).to.eql(52.5);
        });
        it("should handle negative numbers", () => {
            expect(multipleNumbers(-10, 5)).to.eql(-50);
        });
        it("should throw an error if either parameter is not a number", () => {
            expect(() => multipleNumbers("A", "B")).to.throw();
            expect(() => multipleNumbers(10, "B")).to.throw();
            expect(() => multipleNumbers("A", 5)).to.throw();
        });
        it("should work for strings if they can be parsed as numbers", () => {
            expect(multipleNumbers("10", 5)).to.eql(50);
            expect(multipleNumbers("10.5", 5)).to.eql(52.5);
            expect(multipleNumbers("-10", 5)).to.eql(-50);
        });
        it("should throw an error when no numbers are passed in", () => {
            expect(() => multipleNumbers()).to.throw();
        });
        it("should throw an error when one number is passed in", () => {
            expect(() => multipleNumbers(1)).to.throw();
        });
        // it("should throw an error when one number is a 0", () => {
        //     expect(() => multipleNumbers(10, "==0")).to.throw();
        //     expect(() => multipleNumbers("==0", 5)).to.throw();
        // });
    });
});

// Output:
// testing the numbers module
// testing the multipleNumbers function
//   √ should return the sum of two numbers multpled
//   √ should handle decimal numbers
//   √ should handle negative numbers
//   √ should throw an error if either parameter is not a number
//   √ should work for strings if they can be parsed as numbers
//   √ should throw an error when no numbers are passed in
//   √ should throw an error when one number is passed in
//   √ should throw an error when one number is a 0


// 8 passing (15ms)
