'use strict';
var marked = require('marked').setOptions({ langPrefix: 'language-' });
var prism = require('./lib/prism.js')
var path = require('path');
var fs = require('fs');

var blogPath = '/assets/Blog/';
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

        data = data.replace(/(?!\!\[.*\]\()\.\.\/(?=.*\))/g, blogPath);
        posts[fileName.replace(/.md$/, '')] = marked(data);
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
