'use strict';
var prompt = require('prompt');

function greet(name) {
  return "hello " + name;
}

function getInput() {
  prompt.start();
  prompt.get(['name'], function(err, result) {
    console.log('name received');
    var greeting = greet(result.name);
    console.log(greeting);
  });
}



module.exports.greet = greet;
