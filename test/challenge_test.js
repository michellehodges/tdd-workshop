// Your pre-task challenge!

// Application logic:
// Write a short program that prints each number from 1 to 100 on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// Remember, you need to figure out what the requirements are, write the test FIRST, before starting on app logic!
// To save time, I would use table tests :)
const { expect } = require('chai');
let {fizzbuzz} = require('../challenge.js');

describe('fizzbuz', function(){
    describe('#loop', function(){
        it('should return a number', function () {
            expect(fizzbuzz(2)).to.be.a('number')
        })
        it('should return Fizz if divisible by 3', function() {
            expect(fizzbuzz(6)).to.be.equal("Fizz")
        })
        it('should return Buzz if divisible by 5', function() {
            expect(fizzbuzz(10)).to.be.equal("Buzz")
        })
        it('should return FizzBuzz if divisible by 3 & 5', function(){
            expect(fizzbuzz(15)).to.be.equal("FizzBuzz")
        })


    })
    describe('#fizzbuzz-table', function() {
        var tests = [
            [6, "Fizz"],
            [10, "Buzz"],
            [15, "FizzBuzz"],
            [2, 2],
            [5, "Buzz"],
            [88, 88]

        ];
    tests.forEach(function([a, expected]) {
            let result;

            beforeEach(function() {
                result = fizzbuzz(a);
            });

            afterEach(function() {
                result = null;
            });

            it(`${a} should return ${expected}`, function() {
                expect(result).to.be.equal(expected)
            })





        })
    })

})

