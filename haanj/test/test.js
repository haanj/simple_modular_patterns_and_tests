'use strict';
var expect = require('chai').expect;
var hello = require(__dirname + '/../lib/hello.js');


describe('tests greet function', function() {
  it('greet(Morty) should return "hello Morty"', function() {
    var arg = 'Morty';
    var result = hello.greet(arg);
    expect(result).to.equal('hello Morty');
  });
});

describe('tests greet function processes arguments correctly', function() {
  it('greet(arg) should return "hello arg"', function() {
    var args = ['Morty', 'Morty', 'Rick', 'Billy', 'Rusty']
    args.forEach(function(arg) {
      var result = hello.greet(arg);
      expect(result).to.equal('hello ' + arg);
    });
  });
})
