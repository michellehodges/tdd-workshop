// Your pre-task challenge! 

// Application logic: 
// Write a short program that prints each number from 1 to 100 on a new line. 
// For each multiple of 3, print "Fizz" instead of the number. 
// For each multiple of 5, print "Buzz" instead of the number. 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// Remember, you need to figure out what the requirements are, write the test FIRST, before starting on app logic! 
// To save time, I would use table tests  

var { expect } = require('chai');
var challenge = require('../challenge');


// describe(function() {
    // describe('#Prints1to100', function() {
    //     it('should return 1', function() {
    //         expect(challenge.prints1to100).to.equal(1);  
    //     });
    // });
// });

describe('#fizzbuzz-table', function() {
    var tests = [
        [6, 'Fizz'],
        [9, 'Fizz'],
        [10, 'Buzz'],
        [15, 'FizzBuzz'],
        [13, 13] 
        // [10, 'buzz'],
        // [15, 'fizzbuzz']
    ]

    tests.forEach(function([x, expected]) {
        let result;

        beforeEach(function() {
            result = challenge.fizzBuzz(x)
        });
    
        afterEach(function() {
            result = null;
        });

        it('should say Fizz when a multiple of 3 is returned', function() {
            expect(result).to.equal(expected)
        });
        
        it('should say Buzz when a multiple of 5 is returned', function() {
            expect(result).to.equal(expected)
        });  

        it('should say FizzBuzz when a multiple of 3 AND 5 is returned', function() {
            expect(result).to.equal(expected)
        }); 

        it ('should return the value if not a multiple of 3 or 5', function () {
            expect(result).to.equal(expected)
        });
    });

});



