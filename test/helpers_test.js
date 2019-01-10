let helpers = require("../helpers");
var { expect } = require("chai");

describe("helpers", function() {
  describe("#getAllTodos", () => {
    it("function should print all todos", () => {
      expect(helpers.getAllTodos()).to.lengthOf(2);
    });
  });

  describe("#addTodo", () => {
    it("function posts to todos", () => {
      helpers.addTodos("grow watermelon");
      expect(helpers.getAllTodos()).to.lengthOf(3);
    });
  });

  describe("#putTodo", () => {
    it("function puts to todos", () => {
      let array = helpers.getAllTodos();
      expect(helpers.updateTodos("dig hole", 1)).to.equal(array[1]);
    });
  });

  describe("#deleteTodo", () => {
    it("function deletes a todo", () => {
        helpers.deleteTodo(0)
        expect(helpers.getAllTodos()).to.lengthOf(2)
    })
  });
});
