var express = require('express');
var app = express();
var helpers = require('./helpers')

app.get('/', function (req, res) {
  res.send('Your thing is running!');
});

app.get('/api/todo', function (req, res) {
  res.send(helpers.get())
});

app.post('/api/todo/', function (req, res) {
  helpers.post(req.body)
  res.send(helpers.get())
})

app.delete('/api/todo/:index', function(req, res) {
  helpers.delete(req.params.index)
  res.send(helpers.get())

})
app.put('/api/todo/:index'), function(req, res) {
  helpers.update(req.body, req.params.index)
  res.send(helpers.get())  
}
// app.post('/api/todo/:id', function(req, res) {
//   req.params.id
//   res.send(todos)
// })

app.listen(3000, function () {
  console.log('Listening on port 3000...');
});
