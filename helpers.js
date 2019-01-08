var todos = ["plant seed", "make coffee"]

var helpers = {
    getAllTodos: () => {
        return todos
    },
    addTodos: (userValue) => {
        todos.push(userValue)
    },
    updateTodos: (task, i) => {
        todos[i] = task  
        return task
    },
    deleteTodo: (i) => {
        todos.splice(i, 1);
    }
}

module.exports = helpers