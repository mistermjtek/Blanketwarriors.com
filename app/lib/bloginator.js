'use strict';
var text2string = require('text-to-string');
var marked = require('marked');
var prism = require('./prism.js')
var fs = require('fs');
var path = require('path');

var readStream = fs.createReadStream(path.join(__dirname, './', process.argv[2] + '.md'));
var data = '';

marked.setOptions({
  langPrefix: 'language-'
});

readStream.on('data', function(chunk) {
  data = data + chunk;
});

readStream.on('end', function() {
  fs.writeFile(path.join(__dirname, './processed', process.argv[2] + '.txt'), text2string(marked(data)), function(err) {
    if(err) {
      return console.log(err);
    }
  });
  fs.writeFile(path.join(__dirname, './processed', process.argv[2] + '.html'), marked(data), function(err) {
    if(err) {
      return console.log(err);
    }
  });
})
