const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const deque = [];
const maxDequeSize = parseInt(input[0]);
let front = 0;
let rear = 0;

const result = [];
for (let i = 1; i < input.length; i++) {
  const command = input[i].split(" ").map((x) => parseInt(x));
  let print;
  switch (command[0]) {
    case 1:
      deque[front] = command[1];
      front = (front - 1 + maxDequeSize) % maxDequeSize;
      break;
    case 2:
      rear = (rear + 1) % maxDequeSize;
      deque[rear] = command[1];
      break;
    case 3:
      if (front === rear) print = -1;
      else {
        front = (front + 1 + maxDequeSize) % maxDequeSize;
        print = deque[front];
      }
      break;
    case 4:
      if (front === rear) print = -1;
      else {
        print = deque[rear];
        rear = (rear - 1 + maxDequeSize) % maxDequeSize;
      }
      break;
    case 5:
      print = (maxDequeSize - front + rear) % maxDequeSize;
      break;
    case 6:
      print = front === rear ? 1 : 0;
      break;
    case 7:
      if (front === rear) print = -1;
      else {
        print = deque[(front + 1 + maxDequeSize) % maxDequeSize];
      }
      break;
    case 8:
      if (front === rear) print = -1;
      else {
        print = deque[rear];
      }
      break;
  }
  if (!isNaN(print)) result.push(print);
}
console.log(result.join("\n"));