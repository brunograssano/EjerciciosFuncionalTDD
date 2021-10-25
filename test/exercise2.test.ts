import { average } from '../src/exercise2';

describe('average', function() {
  it('with one value', () => {
    expect(average([1])).toEqual(1);
  });

  it('with multiple values', () => {
    expect(average([1, 2, 3])).toEqual(2);
  });

  it('with multiple values where it is not the median', () => {
    expect(average([1, 1, 5, 5])).toEqual(3);
  });
});
