function sumOfElements(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
  }
  

  const arr = [1, 6, 23, 8, 4, 8, 3, 7];
  const result = sumOfElements(arr);
  console.log(result);
  