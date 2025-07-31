const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split(" ")
  .map((x) => parseInt(x));
const queue = [];
const cond = input[1];
for (let i = 1; i <= input[0]; i++) {
  queue.push(i);
}
const result = [];
for (let i = 0; queue.length !== 0; i++) {
  const n = queue.shift();
  if (i % cond !== cond - 1) {
    queue.push(n);
  } else {
    result.push(n);
  }
}
console.log(`<${result.join(", ")}>`);
