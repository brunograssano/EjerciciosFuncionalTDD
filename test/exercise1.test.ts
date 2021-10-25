import { fibonacci } from '../src/exercise1';

describe('fibonacci', function() {
  it('applied to 0', () => {
    expect(fibonacci(0)).toEqual(0);
  });

  it('applied to 1', () => {
    expect(fibonacci(1)).toEqual(1);
  });

  it('applied to 2', () => {
    expect(fibonacci(2)).toEqual(1);
  });

  it('applied to 3', () => {
    expect(fibonacci(3)).toEqual(2);
  });

  it('applied to 4', () => {
    expect(fibonacci(4)).toEqual(3);
  });

  it('applied to 5', () => {
    expect(fibonacci(5)).toEqual(5);
  });

  it('applied to 6', () => {
    expect(fibonacci(6)).toEqual(8);
  });

  it('applied to 7', () => {
    expect(fibonacci(7)).toEqual(13);
  });

  it('applied to 8', () => {
    expect(fibonacci(8)).toEqual(21);
  });
});
