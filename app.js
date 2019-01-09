var express = require("express");
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
var helpers = require("./helpers");

app.get("/", function(req, res) {
  res.send("Your thing is running!");
});

app.get("/api/todo", function(req, res) {
  res.send(helpers.getAllTodos());
});

app.get("/api/todo/:index", function(req, res) {
  const index = req.params.index;
  let array = helpers.getAllTodos();
  res.send(array[index]);
});

app.post("/api/todo", (req, res) => {
  const value = req.body.value;
  helpers.addTodos(value);
  res.send(helpers.getAllTodos());
});

app.put("/api/todo/:index", (req, res) => {
  const value = req.body.value;
  const index = req.params.index;
  helpers.updateTodos(value, index);
  let array = helpers.getAllTodos();
  res.send(array);
});

app.delete("/api/todo/:index", (req, res) => {
  const index = req.params.index;
  helpers.deleteTodo(index);
  res.send(helpers.getAllTodos());
});

app.listen(3000, function() {
  console.log("Listening on port 3000...");
});
