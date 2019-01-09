
var todos = ["plant seed", "make coffee"]


var helpers = {
    getAllTodos: function(arrOfTodos) {
        return arrOfTodos
    },
    postAToDo: function(x) {
        todos.push(x)
        return todos
    },
    getATodoById: function(arr, x) {
        return arr[x]
    },
    deleteById: function(arr, x){
        // let index = arr(indexOf);
        // let returnedTodos = todos;
        return arr.splice(x, 1)
    }
}

module.exports = helpers, todos