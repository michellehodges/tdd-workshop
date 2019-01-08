var todos = ["plant seed", "make coffee"]

var helpers = {
    get: function() {
        return todos
    },
    post: function(something) {
        todos.push(something)
        return todos
    },
    delete: function(index) {
        todos.splice(index, 1);
        return todos
    },
    update: function(input, index) {
        todos[index] = input;
        return input
    }
}

module.exports = helpers