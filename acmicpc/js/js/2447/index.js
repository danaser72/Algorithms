const fs = require("fs");
const input = parseInt(fs.readFileSync(`${__dirname}/dev/stdin`).toString());
const arr = Array.from({ length: input }, () => new Array(input).fill("*"));
const recursive = (arr, x1, y1, x2, y2) => {
  if (x1 === x2) return;
  const pointX = parseInt((x2 - x1 + 1) / 3);
  const pointY = parseInt((y2 - y1 + 1) / 3);
  const left = x1 + pointX;
  const right = x2 - pointX;
  const top = y1 + pointY;
  const bottom = y2 - pointY;
  for (let i = left; i <= right; i++) {
    for (let j = top; j <= bottom; j++) {
      arr[i][j] = " ";
    }
  }
  recursive(arr, x1, y1, left - 1, top - 1);
  recursive(arr, left, y1, right, top - 1);
  recursive(arr, right + 1, y1, x2, top - 1);
  recursive(arr, x1, top, left - 1, bottom);
  recursive(arr, right + 1, top, x2, bottom);
  recursive(arr, x1, bottom + 1, left - 1, y2);
  recursive(arr, left, bottom + 1, right, y2);
  recursive(arr, right + 1, bottom + 1, x2, y2);
};
recursive(arr, 0, 0, arr.length - 1, arr.length - 1);
for (let i = 0; i < input; i++) {
  let result = "";
  for (let j = 0; j < input; j++) {
    result += arr[i][j];
  }
  console.log(result);
}
