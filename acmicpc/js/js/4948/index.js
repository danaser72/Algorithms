const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n").map(x => parseInt(x));
const arr = new Array(246913).fill(0);
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
for (let i = 0; input[i] !== 0; i++) {
  let cnt = 0;
  for (let j = 0; prime[j] <= input[i] * 2; j++) {
    if (prime[j] > input[i]) cnt++;
  }
  console.log(cnt);
}