// 소수 구하기
const arr = new Array(45000).fill(-1);
for (let i = 0; i < arr.length;i++) {
    if (i === 0 || i === 1) arr[i] = false;
    if (arr[i] === -1) {
        arr[i] = i;
        for (let j = 2; i * j <= 45000; j++) {
            arr[i * j] = false;
        }
    }
}
const primes = arr.filter(x => x).map(x => x);

const fs = require("fs");
const input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
let result;
for (let i = 1; i < input.length; i++) {
  result = 1;
  let isEnd = false;
  const AB = input[i].split(" ");
  let A = parseInt(AB[0]);
  let B = parseInt(AB[1]);
  while (!isEnd) {
    isEnd = true;
    for (let j = 0; j < primes.length; j++) {
      if (A % primes[j] === 0 && B % primes[j] === 0) {
        isEnd = false;
        A = parseInt(A / primes[j]);
        B = parseInt(B / primes[j]);
        result *= primes[j];
        break;
      }
    }
  }
  console.log(result * A * B);
}
