/**
 * Bloginator.js
 *
 * Reads all of our markdown blog posts with relative image paths, converts them
 * to html strings, and writes a javascript object with blog information.
 */

'use strict';
var marked = require('marked').setOptions({ langPrefix: 'language-' });
var path = require('path');
var _ = require('lodash');
var fs = require('fs');

function readPosts(inputDir, outputDir, assetsDir, done) {
  var outputObj = {};
  fs.readdir(inputDir, function readPostDir(error, mdFiles) {

    // Remove non-.md files
    _(mdFiles)
      .filter(mdFile => isMarkdown(mdFile))
      .forEach(function loopFile(mdFile, index, mdFiles) {
        fs.readFile(path.join(inputDir, mdFile), 'utf-8', function readPost(error, data) {
          if(error){ return done(error); }

          // Removes the .md from the file and adds it to the output
          outputObj[mdFile.replace(/.md$/, '')] = convertMarkdown(data, assetsDir);

          // Runs the callback if our output size matches the number of files
          if(Object.keys(outputObj).length < mdFiles.length){ return; };

          writeJavascriptFile(outputObj, outputDir, function writePost(error) {
            if(error){ return done(error); }
            console.log('Refreshed blogposts:\n', Object.keys(require(outputDir)));
            done();
          });
        });
      });
  });
}

function isMarkdown(file) {
  return !!file.match(/^.*\.(md)$/);
}

function convertMarkdown(markdownText, assetsDir) {
  // Replaces any ../ with our path
  var newText = markdownText.replace(/(?!\!\[.*\]\()\.\.\/(?=.*\))/g, assetsDir);
  return marked(newText);
}

function writeJavascriptFile(outputObj, outputDir, callback) {
  var javascriptFile = 'module.exports=' + JSON.stringify(outputObj) + ';';
  fs.writeFile(outputDir, javascriptFile, callback);
}

module.exports = readPosts;
