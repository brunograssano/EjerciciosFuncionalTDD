import { derive } from '../src/exercise3';

const square = (x: number) => x * x;

describe('derive', function() {
  it('Approximate the derivative of square in point 2 with error 0.001.', () => {
    const derivefn = derive(square, 0.001);
    expect(derivefn(2)).toBeCloseTo(4);
  });

  it('Approximate the derivative of square in point 6 with error 0.001.', () => {
    const derivefn = derive(square, 0.001);
    expect(derivefn(6)).toBeCloseTo(12);
  });
});
