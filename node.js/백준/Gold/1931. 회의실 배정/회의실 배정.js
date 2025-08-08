const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const conference = [];
let cnt = 0;
for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(" ").map((x) => parseInt(x));
  conference.push(arr);
}
conference.sort((a, b) => {
  const result = a[1] - b[1];
  return result === 0 ? a[0] - b[0] : result;
});
let lastEnd = -1;
for (let i = 0; i < conference.length; i++) {
  if (conference[i][0] >= lastEnd) {
    cnt++;
    lastEnd = conference[i][1];
  }
}
console.log(cnt);
