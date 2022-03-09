const { tSImportEqualsDeclaration } = require('@babel/types');

/**
 * Returns if the number is prime
 * @return {boolean}
 */
function isPrime(number) {
  let internal = Math.round(Math.sqrt(number));

  while (internal > 1) {
    if (number % internal === 0) return false;
    internal--;
  }

  return true;
}

module.exports = isPrime;
