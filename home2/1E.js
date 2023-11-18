function lowestRandomNumber(arr, attempts) {
    const randomNumbers = Array.from({ length: Math.min(attempts, arr.length) }, () => arr[Math.floor(Math.random() * arr.length)]);
    return Math.min(...randomNumbers);
  }
  
  const arr = [1, 6, 23, 8, 4, 8, 3, 7];
  const attempts = 3;
  const result = lowestRandomNumber(arr, attempts);
  console.log(result);