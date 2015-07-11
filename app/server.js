'use strict';

var path = require('path');

var express = require('express');
var server = express();

server.use('/build', express.static(path.join(__dirname, '../build')));

server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('listening on port', port);
