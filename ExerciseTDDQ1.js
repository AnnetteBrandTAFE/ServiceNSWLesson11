// Q1 Create test cases for a function called multiplyNumbers that should take 2 numbers as 
// parameters and return the product of those numbers.

// const { expect } = require("chai");
// const { multipleNumbers } = require("../src/Common/Numbers");

// describe("testing the numbers module", () => {
//     describe("testing the multipleNumbers function", () => {
//         it("should return the sum of two numbers multpled", () => {
//             expect(multipleNumbers(10, 5)).to.eql(50);
//         });
//         it("should handle decimal numbers", () => {
//             expect(multipleNumbers(10.5, 5)).to.eql(52.5);
//         });
//         it("should handle negative numbers", () => {
//             expect(multipleNumbers(-10, 5)).to.eql(-50);
//         });
//         it("should throw an error if either parameter is not a number", () => {
//             expect(() => multipleNumbers("A", "B")).to.throw();
//             expect(() => multipleNumbers(10, "B")).to.throw();
//             expect(() => multipleNumbers("A", 5)).to.throw();
//         });
//         it("should work for strings if they can be parsed as numbers", () => {
//             expect(multipleNumbers("10", 5)).to.eql(50);
//             expect(multipleNumbers("10.5", 5)).to.eql(52.5);
//             expect(multipleNumbers("-10", 5)).to.eql(-50);
//         });
//         it("should throw an error when no numbers are passed in", () => {
//             expect(() => multipleNumbers()).to.throw();
//         });
//         it("should throw an error when one number is passed in", () => {
//             expect(() => multipleNumbers(1)).to.throw();
//         });
//         it("should throw an error when one number is a 0", () => {
//             expect(() => multipleNumbers(10, 0)).to.throw();
//             expect(() => multipleNumbers(0, 5)).to.throw();
//         });
//     });
// });