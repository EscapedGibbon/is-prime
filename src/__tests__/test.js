import isPrime from '../index';

describe('verify isPrime', () => {
  it('should return false', () => {
    expect(isPrime(6)).toStrictEqual(false);
  });
  it('should return true', () => {
    expect(isPrime(3)).toStrictEqual(true);
  });
});
