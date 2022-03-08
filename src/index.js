/**
 * Returns if the number is prime
 * @return {boolean}
 */
function isPrime(number) {
  let internal = number - 1;

  while (internal > 1) {
    if (number % internal === 0) return false;
    internal--;
  }

  return true;
}

module.exports = isPrime;
