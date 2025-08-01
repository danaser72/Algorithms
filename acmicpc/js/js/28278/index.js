const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
const stack = [];
let cur = -1;
const result = [];
for (let i = 1; i < input.length; i++) {
  const command = input[i].split(" ").map((x) => parseInt(x));
  let msg;
  switch (command[0]) {
    case 1:
      stack[cur + 1] = command[1];
      cur++;
      break;
    case 2:
      if (cur === -1) msg = -1;
      else {
        msg = stack[cur];
        cur--;
      }
      break;
    case 3:
      msg = cur + 1;
      break;
    case 4:
      msg = cur === -1 ? 1 : 0;
      break;
    case 5:
      if (cur === -1) msg = -1;
      else msg = stack[cur];
      break;
  }
  if (!isNaN(msg)) result.push(msg);
}
console.log(result.join("\n"));