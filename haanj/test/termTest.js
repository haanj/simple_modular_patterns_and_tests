'use strict';
var expect = require('chai').expect;
var helloName = require(__dirname + '/../app');

describe('tests helloName function with no arguments', function() {
  it('should return "hello world"', function() {
    expect(helloName()).to.equal('hello world');
  });
});

describe('tests helloName function with arguments', function() {
  beforeEach(function() {
    this.processArgvBackup = process.argv;
    process.argv= ['node', 'path/to/hello.js', 'peeps'];
  });

  afterEach(function() {
    process.argv = this.processArgvBackup;
  });

  it('it should return "hello peeps"', function() {
    expect(helloName()).to.equal('hello peeps');
  });
});
