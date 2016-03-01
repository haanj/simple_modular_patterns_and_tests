'use strict';
var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/hello.js');


describe('tests greet function', function() {
  it('greet(Morty) should return "hello Morty"', function() {
    expect(greet('Morty')).to.equal('hello Morty');
  });
});

describe('')
