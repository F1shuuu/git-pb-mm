const arr = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
const sumOdd = arr.filter(item => item % 2 !== 0).reduce((sum, current) => sum + current, 0);
console.log(sumOdd);