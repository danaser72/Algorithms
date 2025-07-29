const fs = require("fs");
const input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n").map(x => parseInt(x));
const prime = new Array(1000000).fill(0);
for (let i = 0; i < prime.length; i++) {
  if (i === 0 || i === 1) prime[i] = false;
  if (prime[i] === 0) {
    prime[i] = true;
    for (let j = 2; i * j < prime.length; j++) {
      prime[i * j] = false;
    }
  }
}
for (let i = 1; i < input.length; i++) {
  let cnt = 0;
  for (let j = 2; j <= input[i] / 2; j++) {
    if(prime[j] && prime[input[i] - j]) cnt++;
  }
  console.log(cnt);
}