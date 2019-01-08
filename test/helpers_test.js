let helpers = require('../helpers')
var { expect } = require('chai')

describe('helpers', function() {
    var todos = ["plant seed", "make coffee"]

    describe('#getAllTodos', () => {
        it('function should print all todos', () => {
            // Well, this isn't a very good test. Make more!
            expect(helpers.getAllTodos(["plant seed", "make coffee"])).to.lengthOf(2)
        })
    })
    describe('#postAToDo', () => {
        it('should add a Todo', () => {
            expect(helpers.postAToDo("eat something")).to.have.lengthOf(3)
        })
    })
    describe('#getATodoById',()=>{
        it(`should return a todo by it's index value`,()=>{
            expect(helpers.getATodoById(todos, 1)).to.equal("make coffee")
        })
    })
    describe('#deleteById', () => {
        it('should remove an array item by its index', () => {
            expect(helpers.deleteById(todos, 1)).to.not.include(todos[1])
            console.log(todos)
        })
    })
})