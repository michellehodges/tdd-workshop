var { expect } = require('chai')
var math = require('../math')

describe('math', function() {

    //when you're testing specific methods, common best practice is to use # or . and then function name 
    describe('#add', function() {
        it('should add the values of a and b', function() {
            expect(math.add(1,2)).to.equal(3);
        })
    })

    //this is called table testing
    describe('#add-table', function() {
        var tests = [
            [1, 1, 2], 
            [2, 3, 5],
            [12, 30, 42]
        ];

        tests.forEach(function([a, b, expected]) {
            let sum; 
    
            beforeEach(function() {
                sum = math.add(a, b)
            });
        
            afterEach(function() {
                sum = null;
            });

            it(`${a} + ${b} = ${expected}`, function() {
                expect(sum).to.equal(expected)
            })

            it(`${a} + ${b} = ${expected}`, function() {
                expect(sum).to.satisfy(Number.isInteger)
            })
        })
    })
})
