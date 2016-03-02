'use strict';

var gulp = require('gulp');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var paths = ['*.js', 'lib/hello.js', 'test/*js'];

gulp.task('lint', function() {
  return gulp.src(paths)
    .pipe(lint())
    .pipe(lint.format());
});

gulp.task('mocha', function() {
  return gulp.src(__dirname + '/test/test.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

// gulp.task('mocha', function() {
//   gulp.src(paths)
//     .pipe(mocha());
// });

gulp.task('default', ['lint', 'mocha']);

gulp.watch(paths, function(){
  gulp.run('default');
});

// stuff
