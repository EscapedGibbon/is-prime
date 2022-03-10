import isPrime from '../index';

describe('verify isPrime', () => {
  it('general', () => {
    expect(isPrime(6)).toStrictEqual(false);
    expect(isPrime(15)).toStrictEqual(false);
    expect(isPrime(2)).toStrictEqual(true);
  });

  it('testingOne', () => {
    expect(isPrime(1)).toStrictEqual(false);
  });
  it('testingZero', () => {
    expect(isPrime(0)).toStrictEqual(null);
  });
});
