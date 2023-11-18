const arr = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let result = 0;

for (let item of arr) {
  result += (item % 2 === 0) ? item : -item;
}

console.log(result);