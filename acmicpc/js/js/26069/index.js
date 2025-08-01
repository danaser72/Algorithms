const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const obj = {};
for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(" ");
  const A = arr[0].trim();
  const B = arr[1].trim();
  if (
    A === "ChongChong" ||
    B === "ChongChong" ||
    obj[A] === true ||
    obj[B] === true
  ) {
    obj[A] = true;
    obj[B] = true;
  } else {
    obj[A] = false;
    obj[B] = false;
  }
}
let cnt = 0;
for (const keys in obj) {
  if (obj[keys] === true) cnt++;
}
console.log(cnt);
