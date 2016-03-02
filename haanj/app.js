'use strict';

var hello = require(__dirname + '/lib/hello').greet;

var helloName = function() {
  var greeting = hello(process.argv[2] || 'world');
  console.log(greeting);
  return greeting;
};

helloName();

module.exports = helloName;
