let helpers = require('../helpers')
var { expect } = require('chai')

describe('helpers', function() {

    describe('#getAllTodos', () => {
        it('function should print all todos', () => {
            // Well, this isn't a very good test. Make more! 
            expect(helpers.getAllTodos(["plant seed", "make coffee"])).to.lengthOf(2)
        })
    })
})