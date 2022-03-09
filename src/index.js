const { tSImportEqualsDeclaration } = require('@babel/types');

/**
 * Returns if the number is prime
 * @return {boolean}
 */
function isPrime(number) {
  if (number === 1) {
    return false;
  } else if (number === 0) {
    console.log('Exception');
  } else {
    let internal = Math.abs(Math.round(Math.sqrt(number)));

    while (internal > 1) {
      if (number % internal === 0) return false;
      internal--;
    }

    return true;
  }
}

module.exports = isPrime;
