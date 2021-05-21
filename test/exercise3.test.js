const { fderive, squear } = require('../src/exercise3');

const assert = require('assert');

describe('fderive', function() {
  it('Approximate the derive of squear in point 2 with error 0.001.', () => {
    const derivefn = fderive(squear, 0.001);
    assert.equal(derivefn(2), 3.9999999999995595);
  });

  it('Approximate the derive of squear in point 6 with error 0.001.', () => {
    const derivefn = fderive(squear, 0.001);
    assert.equal(derivefn(6), 12.000000000004007);
  });
});
