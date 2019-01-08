var express = require('express');
var app = express();
var helpers = require('./helpers')

var todos = ["plant seed", "make coffee"]

app.get('/', function (req, res) {
  res.send('Your thing is running!');
});

app.get('/api/todo', function (req, res) {
  res.send(helpers.getAllTodos(todos))
});


app.listen(3000, function () {
  console.log('Listening on port 3000...');
});
