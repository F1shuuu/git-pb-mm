function generateFibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const previousFibonacci = generateFibonacci(n - 1);
      const lastTwoSum = previousFibonacci[previousFibonacci.length - 1] + previousFibonacci[previousFibonacci.length - 2];
      return [...previousFibonacci, lastTwoSum];
    }
  }
  
  const n = 8;
  const fibonacciNumbers = generateFibonacci(n);
  console.log(`First ${n} Fibonacci numbers: ${fibonacciNumbers.join(', ')}`);