// Bloginator.js
// ---------

// Reads all of our markdown blog posts with relative image paths, converts them
// to html strings, and writes a javascript object with blog information.

'use strict';
var marked = require('marked').setOptions({ langPrefix: 'language-' });
var prism = require('./lib/prism.js');
var _ = require('lodash');
var path = require('path');
var fs = require('fs');

module.exports = readPosts;

function readPosts(inputDirectory, outputDirectory, assetsDirectory, done) {
  var outputObj = {};
  fs.readdir(inputDirectory, function(error, files) {

    // Remove non-.md files
    files = _.filter(files, function(file) {
      return !!file.match(/^.*\.(md)$/);
    });

    _.forEach(files, function(file){
      addPosts(file, files, outputObj, inputDirectory, assetsDirectory, function(data) {
        outputFile(outputDirectory, outputObj, done);
      });
    });
  });
};

// Reads a markdown file and turns it into a string
function addPosts(file, files, outputObj, inputDirectory, assetsDirectory, done) {
  var readStream = fs.createReadStream(path.join(inputDirectory, file));
  var data = '';
  readStream.on('data', function(chunk) { data += chunk; });
  readStream.on('end', function(error) {

    // Replaces any ../ with our path
    data = data.replace(/(?!\!\[.*\]\()\.\.\/(?=.*\))/g, assetsDirectory);
    data = marked(data);

    // Removes the .md from the file and adds it to the output
    outputObj[file.replace(/.md$/, '')] = data;

    // Runs the callback if our output size matches the number of files
    if(Object.keys(outputObj).length === files.length) {
      done();
    }
  });
};

// Writes a javascript file that exports a posts object
function outputFile(outputDirectory, posts, done) {
  var outputText = 'module.exports=' + JSON.stringify(posts) + ';';

  fs.writeFile(outputDirectory, outputText, function(error) {
    if(error){ return console.log(error); }
    console.log('Refreshed blogposts: ', Object.keys(require(outputDirectory)));
    done();
  });
}
