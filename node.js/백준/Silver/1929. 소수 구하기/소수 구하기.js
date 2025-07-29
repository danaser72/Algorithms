const fs = require("fs");
const input = fs.readFileSync(`/dev/stdin`).toString().trim().split(" ");
const M = parseInt(input[0]);
const N = parseInt(input[1]);
const arr = new Array(1000000).fill(0);
for (let i = 0; i < arr.length; i++) {
  if (i === 0 || i === 1) arr[i] = false;
  if (arr[i] === 0) {
    arr[i] = i;
    for (let j = 2; i * j < arr.length; j++) {
      arr[i * j] = false;
    }
  }
}
const prime = arr.filter((x) => x);
let result = "";
for (let i = 0; i < prime.length; i++) {
  if (prime[i] >= M && prime[i] <= N) result += `${prime[i]}\n`;
}
console.log(result.trim());