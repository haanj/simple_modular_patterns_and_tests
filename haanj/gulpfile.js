'use strict';

var gulp = require('gulp');
var lint = require('eslint');

var paths = ['*.js', 'lib/hello.js', 'test/*js'];

gulp.task('lint', function() {
  return gulp.src(paths)
    .pipe(lint())
    .pipe(lint.format());
});

gulp.task('default', ['lint']);