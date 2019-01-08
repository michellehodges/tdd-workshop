// Your pre-task challenge!

// Application logic:
// Write a short program that prints each number from 1 to 100 on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// Remember, you need to figure out what the requirements are, write the test FIRST, before starting on app logic!
// To save time, I would use table tests :)

var { expect } = require("chai");
var Challenge = require("../challenge");

describe("challenge", () => {
//   var array = Challenge.array();
    var tests = [
        [3, "Fizz"], 
        [5, "Buzz"], 
        [30, "fizz buzz"]
    ]
    
    describe('#array', () => {
        it("has x number of integers in it", () => {
            expect(Challenge.array()).to.have.lengthOf(100);
        })
    })

    // for everything in the array tests, fizzbuzz(a) should equal to expected 
    tests.forEach(function([a, expected]) {
        describe('#fizz-buzz-fizzbuzz', () => {
            it("it works", () => {
                expect(Challenge.fizzBuzz(a)).to.equal(expected);
            })
        })   
           
  });
});
   

// for everything in the array tests, fizzbuzz(a) should equal to expected 

    // describe("#normal-values", () => {
    //     it("not multiples of 3 or 5", () => {
    //         expect(Challenge.fizzBuzz(a)).to.not.equal("Fizz", "Buzz", "fizz buzz");
    //     });
    // });
    // describe("#equals-fizzbuzz", () => {
    //     it("multiple of both 3 and 5", () => {
    //       expect(Challenge.fizzBuzz(a)).to.not.equal("Fizz", "Buzz");
    //     });
    // });
    // describe("#equals-fizz", () => {
    //     it("multiple of 3", () => {
    //         expect(Challenge.fizzBuzz(a)).to.not.equal("Buzz", "fizz buzz");
    //     });
    // });
    // describe("#equals-buzz", () => {
    //     it("multiple of 5", () => {
    //         expect(Challenge.fizzBuzz(a)).to.not.equal("Fizz", "fizz buzz");
    //     });
    // });
