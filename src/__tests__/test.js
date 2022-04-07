import isPrime from '../index';

describe('verify isPrime', () => {
  it('general', () => {
    expect(isPrime(6)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(2)).toBe(true);
  });

  it('testingOne', () => {
    expect(isPrime(1)).toBe(false);
  });
  it('testingNegative', () => {
    expect(() => isPrime(-7)).toThrow('Exception error');
  });
});
