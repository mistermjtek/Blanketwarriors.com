var marked = require('marked').setOptions({ langPrefix: 'language-' });
var prism = require('./lib/prism.js')
var path = require('path');
var fs = require('fs');

readPosts(path.join(__dirname, 'assets', 'Blog', 'Posts'), path.join(__dirname, 'lib', 'posts.js'));

function readPosts(inputDir, outputDir) {
  var posts = {};
  var count = 0;
  fs.readdir(inputDir, function(error, files) {

    // Filters out non-.md files
    files = files.filter(function(file) { return !!file.match(/^.*\.(md)$/)});

    for(var i = 0; i < files.length; i++) {
      // Converts each markdown file to text and adds it to posts object
      readPost(files[i], files, inputDir, outputDir, function(fileName, data) {
        posts[fileName.replace(/.md$/, '')] = text2string(marked(data));
        count++;

        // After all files are added, write it to file
        if(count === files.length) {
          fs.writeFile(outputDir, 'module.exports=' + JSON.stringify(posts) + ';', function(err) {
            console.log('Refreshed blogposts: ', Object.keys(require(outputDir)));
          });
        }
      });
    }
  });
};

function readPost(fileName, files, inputDir, outputDir, callback) {
  var readStream = fs.createReadStream(path.join(inputDir, fileName));
  var data = '';
  readStream.on('data', function(chunk) { data += chunk; });
  readStream.on('end', function(error) { callback(fileName, data); });
};

function text2string(text, quote) {
  var map = { single: "'", double: '"' };
  var escapeSingleQuote = [[/'/g, "\\'"]];
  var escapeDoubleQuote = [[/"/g, '\\"']];
  var escapes = [[/\r\n|\r|\n/g, "\\n"], [/\t/g, "\\t"]];
  var s = escapeSingleQuote.concat(escapes);
  var d = escapeDoubleQuote.concat(escapes);
  quote = quote || map.double;
  var replacements = (quote == map.double) ? d : s;
  for (var i = 0, len = replacements.length; i < len; i++) {
    var replacement = replacements[i];
    text = text.replace(replacement[0], replacement[1]);
  }
  return quote + text + quote;
};
