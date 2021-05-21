const faverage = require('../src/exercise2');

const assert = require('assert');

describe('faverage', function() {
  it('faverage with no params', () => {
    assert.equal(faverage(), 0);
  });

  it('faverage with no values', () => {
    assert.equal(faverage([]), 0);
  });

  it('faverage with values', () => {
    assert.equal(faverage([1, 2, 3]), 2);
  });
});
