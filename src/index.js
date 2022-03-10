const { tSImportEqualsDeclaration, is } = require('@babel/types');

/**
 * Checks if the number is prime
 * @param {number} number - a number to check whether it's prime or not
 * @returns {boolean}
 */
function isPrime(number) {
  if (
    number <= 0 ||
    typeof number !== 'number' ||
    number !== Math.round(number)
  ) {
    throw new Error('Exception error');
  }
  if (number === 1) {
    return false;
  }
  let internal = Math.round(Math.sqrt(number));

  while (internal > 1) {
    if (number % internal === 0) return false;
    internal--;
  }

  return true;
}

console.log(isPrime(2));
module.exports = isPrime;
