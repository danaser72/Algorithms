const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const queue = [];
let cur = 0;
const result = [];
for (let i = 1; i < input.length; i++) {
  const command = input[i].split(" ");
  let print;
  switch (command[0].trim()) {
    case "push":
      queue.push(parseInt(command[1]));
      break;
    case "pop":
      if (cur === queue.length) print = -1;
      else print = queue[cur++];
      break;
    case "size":
      print = queue.length - cur;
      break;
    case "empty":
      print = queue.length - cur === 0 ? 1 : 0;
      break;
    case "front":
      if (cur === queue.length) print = -1;
      else print = queue[cur];
      break;
    case "back":
      if (cur === queue.length) print = -1;
      else print = queue[queue.length - 1];
      break;
  }
  if (!isNaN(print)) result.push(print);
}
console.log(result.join("\n"));
