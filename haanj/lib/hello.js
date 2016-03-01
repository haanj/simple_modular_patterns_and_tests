'use strict';
var prompt = require('prompt');

function greet(name) {
  return "hello " + name;
}

function getInput() {
  prompt.start();
  prompt.get(['name'], function(err, result) {
    console.log('name received');
    console.log(greet(result.name));
  });
}

getInput();

module.exports = greet;
