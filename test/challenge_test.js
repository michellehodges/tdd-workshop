// Your pre-task challenge!

// Application logic:
// Write a short program that prints each number from 1 to 100 on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// Remember, you need to figure out what the requirements are, write the test FIRST, before starting on app logic!
// To save time, I would use table tests :)

var { expect } = require("chai");
var fizzbuzz = require("../challenge");

describe("#fizzbuzz", () => {
  var testsPassed = [[3, 3], [6, 3], [5, 5], [30, '3 & 5']];
  var testsFailed = [[4, 3], [7, 3], [22, 5], [35.5, '3 & 5']];

  testsPassed.forEach(([a, expected]) => {
    it(`${a} to be multiple of the correct number ${expected}`, () => {
      expect(fizzbuzz(a)).to.equal(0)
    });
  });

  testsFailed.forEach(([a, expected]) => {
    it(`${a} not to be multiple of the correct number ${expected}`, () => {
      expect(fizzbuzz(a)).to.equal(1)
    });
  });
});
