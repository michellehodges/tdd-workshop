
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
        let index = arr(indexOf);
        return arr.splice(index, x)
    }
}

module.exports = helpers, todos