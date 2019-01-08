let helpers = require('../helpers')
var { expect } = require('chai')

describe('helpers', function() {

    describe('#getAllTodos', () => {
        it('function should print all todos', () => {
            // Well, this isn't a very good test. Make more! 
            expect(helpers.getAllTodos(["plant seed", "make coffee"])).to.lengthOf(2)
        })
    })

    describe('#saveNewTodo', () => {
        it('function should save a new todo', () => {
            expect(helpers.addTodo('Drink all the coffee')).to.lengthOf(3)
        })
    })

    describe('#updateTodo', () => {
        it('function should update todo based on id', () => {
            expect(helpers.updateTodo('plant coffee', 0)).to.equal('plant coffee')
        })
    })

    describe('deleteTodo', () => {
        it('function should delete todo by index id', () => {
            expect(helpers.deleteTodo(1)).to.lengthOf(1)
        })
    })




})





