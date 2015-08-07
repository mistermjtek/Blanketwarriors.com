'use strict';
var marked = require('marked').setOptions({ langPrefix: 'language-' });
var prism = require('./lib/prism.js');
var _ = require('lodash');
var path = require('path');
var fs = require('fs');

module.exports = readPosts;

function readPosts(inputDir, outputDir, assetsDir, done) {
  var posts = {};
  fs.readdir(inputDir, function(error, files) {

    // Filters out non-.md files
    files = _.filter(files, function(file) {
      return !!file.match(/^.*\.(md)$/);
    });

    _.forEach(files, function(file){
      readFile(assetsDir, path.join(inputDir, file), function(data){
        addPost(files, posts, file, data, function() {
          outputAll(outputDir, posts, function() {
            console.log('Refreshed blogposts: ', Object.keys(require(outputDir)));
          });
        });
      });
    });
  });
};

// Reads a markdown file and turns it into a string
function readFile(assetsDir, file, done) {
  var readStream = fs.createReadStream(file);
  var data = '';
  readStream.on('data', function(chunk) { data += chunk; });
  readStream.on('end', function(error) {
    // Replace any ../ with our path
    data = data.replace(/(?!\!\[.*\]\()\.\.\/(?=.*\))/g, assetsDir);
    data = marked(data);
    done(data);
  });
};

// Adds an html string to the posts object
function addPost(files, posts, fileName, data, done) {
  posts[fileName.replace(/.md$/, '')] = data;
  if(Object.keys(posts).length === files.length) {
    done();
  }
};

// Writes a javascript file that exports a posts object
function outputAll(outputDir, posts, done) {
  fs.writeFile(outputDir, 'module.exports=' + JSON.stringify(posts) + ';', function(error) {
    if(error){ return console.log(error); }
    done();
  });
}
