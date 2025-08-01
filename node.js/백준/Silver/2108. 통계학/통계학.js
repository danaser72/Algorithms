const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n")
  .map((x) => parseInt(x));
const N = parseInt(input[0]);
const arr = input.slice(1).sort((a, b) => a - b);
let first = 0;
let second = arr[(arr.length - 1) / 2];
let thirdObj = {};
let third = [];
let fourth = arr[arr.length - 1] - arr[0];
for (let i = 0; i < arr.length; i++) {
  first += arr[i];
  if (!thirdObj[arr[i]]) thirdObj[arr[i]] = 1;
  else thirdObj[arr[i]]++;
}
first /= N;
let max = 0;
for (let i in thirdObj) {
  if (thirdObj[i] > max) {
    max = thirdObj[i];
    third = [i];
  } else if (thirdObj[i] === max) {
    third.push(i);
  }
}
third.sort((a, b) => a - b);
console.log(
  `${Math.round(first)}\n${second}\n${
    third.length > 1 ? third[1] : third[0]
  }\n${fourth}`
);
