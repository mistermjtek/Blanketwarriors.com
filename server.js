var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'public/404.html'), 404);
});

app.listen(3000);
console.log('Listening on port 3000');
