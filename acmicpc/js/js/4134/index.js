const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
const arr = new Array(63246).fill(0);
for (let i = 0; i < arr.length; i++) {
  if (i === 0 || i === 1) arr[i] = false;
  if (arr[i] === 0) {
    arr[i] = i;
    for (let j = 2; i * j < arr.length; j++) {
      arr[i * j] = false;
    }
  }
}
const prime = arr.filter(x => x);
for (let t = 1; t < input.length; t++) {
  const n = parseInt(input[t]);
  let isFound = false;
  for (let i = n; !isFound; i++) {
    if (i !== 2 && i % 2 === 0) continue;
    for (let j = 0; j < prime.length && prime[j] <= Math.ceil(Math.sqrt(i)); j++) {
      isFound = true;
      if(i === 2) break;
      if (i % prime[j] === 0) {
        isFound = false;
        break;
      }
    }
    if (isFound) console.log(i);
  }  
}