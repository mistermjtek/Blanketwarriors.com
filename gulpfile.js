var path = require('path');
var gulp = require('gulp');
var webpack = require('webpack');
var nodemon = require('nodemon');

var bloginator = require('./app/bloginator.js');
var config = require('./webpack.config.js');

var build = function(done) {
  return function(error, stats) {
    if(error){ return console.log('Error', error); }
    if(done){ done(); }
  };
};

gulp.task('nodemon', function() {
  nodemon({
    script: path.join(__dirname, 'build/server.js'),
    ext: 'js html css',
    env: {'NODE_ENV': 'development'}
  })
})

gulp.task('client-build', function(done) {
  webpack(config.client).run(function(error, stats) {
    var inputDir = path.join(__dirname, 'assets/Blog/Posts');
    var outputDir = path.join(__dirname, 'app/lib/posts.js');
    var assetDir = '/assets/Blog/';
    bloginator(inputDir, outputDir, assetDir, function() {
      build(done)(error, stats);
    });
  });
});

gulp.task('server-build', function(done) {
  webpack(config.server).run(build(done));
});

gulp.task('client-watch', function() {
  webpack(config.client).watch(100, build());
});

gulp.task('server-watch', function() {
  webpack(config.server).watch(100, function(error, stats) {
    build()(error, stats);
    nodemon.restart();
  });
});

gulp.task('build', ['server-build', 'client-build']);
gulp.task('watch', ['server-watch', 'client-watch']);

gulp.task('run', ['build', 'server-watch', 'client-watch', 'nodemon']);
