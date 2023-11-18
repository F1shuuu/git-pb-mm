function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
function generatePrimes(n) {
    const primes = [];
    let currentNumber = 2;
  
    while (primes.length < n) {
      if (isPrime(currentNumber)) {
        primes.push(currentNumber);
      }
      currentNumber++;
    }
  
    return primes;
  }
  
  const numberOfPrimes = 5;
  const primeNumbers = generatePrimes(numberOfPrimes);
  console.log(`First ${numberOfPrimes} prime numbers: ${primeNumbers.join(', ')}`);