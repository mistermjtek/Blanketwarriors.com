'use strict';
var text2string = require('text-to-string');
var fs = require('fs');
var path = require('path');

var readMarkDown = function(title) {
  var readStream = fs.createReadStream(path.join(__dirname, './', title + '.md'));
  var data = '';

  readStream.on('data', function(chunk) {
    data = data + chunk;
  });

  readStream.on('end', function() {
    callback(data);
  })
};
