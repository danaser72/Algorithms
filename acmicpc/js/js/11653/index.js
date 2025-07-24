var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
var N = parseInt(input);
let result = [];
let arr = new Array(3163).fill(0);
arr[0] = -1;
arr[1] = -1;
for (let i = 2; i < arr.length; i++) {
  if (arr[i] === 0) {
    arr[i] = i;
    for (let j = 2; i * j < arr.length; j++) {
      arr[i * j] = -1;
    }
  }
}
arr = arr.filter((x) => x !== -1);
const get = (num) => {
  let res = 1;
  for (let i = 0; arr[i] <= num; i++) {
    if (num % arr[i] === 0) {
      res = arr[i];
      break;
    }
  }
  return res;
};

while (N !== 1) {
  let p = get(N);
  if (p === 1) {
    result.push(N);
    break;
  }
  result.push(p);
  N = parseInt(N / p);
}

if (result.length > 0) {
  console.log(result.join("\n"));
}