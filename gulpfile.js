'use strict';
var path = require('path');
var gulp = require('gulp');
var webpack = require('webpack');
var nodemon = require('nodemon');

var bloginator = require('./app/bloginator.js');
var config = require('./webpack.config.js');

var build = function(done) {
  return function(error, stats) {
    if(error){ return console.log('Error', error); }
    console.log(stats.toString({colors: true}));
    if(done){ done(); }
  };
};

gulp.task('default', function(done) {
  webpack(config).run(build(done));
});

gulp.task('build:blog', function() {
  webpack(config).run(function(error, stats) {
    var inputDir = path.join(__dirname, 'app/assets/Blog/Posts');;
    var outputDir = path.join(__dirname, 'app/lib/posts.js');
    var assetDir = '/assets/Blog/';
    bloginator(inputDir, outputDir, assetDir, function() {
      build()(error, stats);
    });
  });
});

gulp.task('build:watch', function() {
  webpack(config).watch(100, function(error, stats) {
    build()(error, stats);
    nodemon.restart();
  });
});

gulp.task('run', ['build:blog', 'build:watch'], function() {
  nodemon({
    execMap: { js: 'node' },
    script: path.join(__dirname, 'app/server.js'),
  }).on('restart', function() {
    console.log('Restarted!');
  });
});



