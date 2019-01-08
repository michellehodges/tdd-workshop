let helpers = require('../helpers')
var { expect } = require('chai')

describe('helpers', function() {

    describe('#getAllTodos', () => {
        it('function should print all todos', () => {
            // Well, this isn't a very good test. Make more! 
            expect(helpers.get()).to.lengthOf(2)
        })
    })
    describe('#postNewTodo', () => {
        it('function should add a new todo', () => {
            expect(helpers.post("yeet")).to.have.lengthOf(3)
        })
    })
    describe('#deleteTodoItem', () => {
        it('function should delete a todo', () => {
            expect(helpers.delete()).to.have.lengthOf(2)
        })
    })
    describe('#updateTodoItem', () => {
        it('function should update a todo', () => {
            var array = helpers.get();
            expect(helpers.update("seed", 0)).to.equal(array[0])
        })
    })
})