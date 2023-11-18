function reverseArray(arr) {
    
    let reversedArray = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
  
    return reversedArray;
  }
  
  const originalArray = [1, 6, 23, 8, 4, 8, 3, 7];
  const reversedArray = reverseArray(originalArray);
  console.log(reversedArray);