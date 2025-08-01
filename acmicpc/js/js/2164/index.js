const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
const N = parseInt(input);
const queue = [];
let cur = 0;
for (let i = 1; i <= N; i++) {
  queue.push(i);
}
let action = false;
while (queue.length - cur !== 1) {
  const card = queue[cur++];
  if (action) queue.push(card);
  action = !action;
}
console.log(queue[cur]);
