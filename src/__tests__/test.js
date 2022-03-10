import isPrime from '../index';

describe('verify isPrime', () => {
  it('testingSix', () => {
    expect(isPrime(6)).toStrictEqual(false);
  });
  it('testingFifteen', () => {
    expect(isPrime(15)).toStrictEqual(false);
  });

  it('testingTwo', () => {
    expect(isPrime(2)).toStrictEqual(true);
  });
  it('testingOne', () => {
    expect(isPrime(1)).toStrictEqual(false);
  });
  it('testingZero', () => {
    expect(isPrime(0)).toStrictEqual(null);
  });
});
