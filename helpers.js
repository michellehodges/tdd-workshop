var helpers = {
    getAllTodos: function(arrOfTodos) {
        return arrOfTodos
    },

    addTodo: function(newItem) {
        var todos = ["plant seed", "make coffee"]
        todos.push(newItem);
        return todos; 
    },
    
    updateTodo: function(updatedTodo, index) {
        var todos = ["plant seed", "make coffee"]
        todos.splice(index, 1, updatedTodo);
        return todos[0];
    },

    deleteTodo: function(index) {
        var todos = ["plant seed", "make coffee"]
        todos.splice(index, 1);
        return todos;
    }
}

   
module.exports = helpers