const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const arr = input[1].split(" ").map((x) => parseInt(x));
let stack = [];
let pos = 1;
for (let i = 0; i < arr.length; i++) {
  if (pos === arr[i]) {
    pos++;
    while (stack.length) {
      if (stack[stack.length - 1] !== pos) break;
      stack = stack.slice(0, stack.length - 1);
      pos++;
    }
  } else {
    stack.push(arr[i]);
  }
}

console.log(stack.length === 0 ? "Nice" : "Sad");
