var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

var helpers = require('./helpers')

// var todos = ["plant seed", "make coffee"]

app.get('/', function (req, res) {
  res.send('Your thing is running!');
});

app.get('/api/todo', function (req, res) {
  res.send(helpers.getAllTodos())
});

app.get('/api/todo/:id', function (req, res) {
  const id = req.params.id
  let array = helpers.getAllTodos()
  res.send(array[id])
});

app.post('/api/todo', (req, res) => {
  helpers.addTodos(req.body)
  res.send(helpers.getAllTodos())
})

app.put('/api/todo/:index', (req, res) => {
  helpers.updateTodos(req.body, req.params.index)
  let array = helpers.getAllTodos();
  res.send(array[id])
})

app.delete('/api/todo/:index', (req, res) => {
  helpers.deleteTodo(req.params.index)
  res.send(helpers.getAllTodos())
})

app.listen(3000, function () {
  console.log('Listening on port 3000...');
});