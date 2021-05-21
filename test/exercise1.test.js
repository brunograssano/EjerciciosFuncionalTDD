const fibonacci = require('../src/exercise1');

const assert = require('assert');

describe('fibonacci', function() {
  it('fibonacci applied to 0', () => {
    assert.equal(fibonacci(0), 0);
  });

  it('fibonacci applied to 1', () => {
    assert.equal(fibonacci(1), 1);
  });

  it('fibonacci applied to 2', () => {
    assert.equal(fibonacci(2), 1);
  });

  it('fibonacci applied to 3', () => {
    assert.equal(fibonacci(3), 2);
  });

  it('fibonacci applied to 4', () => {
    assert.equal(fibonacci(4), 3);
  });

  it('fibonacci applied to 5', () => {
    assert.equal(fibonacci(5), 5);
  });

  it('fibonacci applied to 6', () => {
    assert.equal(fibonacci(6), 8);
  });

  it('fibonacci applied to 7', () => {
    assert.equal(fibonacci(7), 13);
  });

  it('fibonacci applied to 8', () => {
    assert.equal(fibonacci(8), 21);
  });
});
