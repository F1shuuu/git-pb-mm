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
  
  const testNumber = 13;
  if (isPrime(testNumber)) {
    console.log(`${testNumber} is a prime number.`);
  } else {
    console.log(`${testNumber} is not a prime number.`);
  }