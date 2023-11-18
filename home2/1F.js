function randomOrder(arr) {
    const shuffledArray = arr.slice().sort(() => Math.random() - 0.5);
    return shuffledArray;
  }
  
  
  const arr = [1, 6, 23, 8, 4, 8, 3, 7];
  const result = randomOrder(arr);
  console.log(result);