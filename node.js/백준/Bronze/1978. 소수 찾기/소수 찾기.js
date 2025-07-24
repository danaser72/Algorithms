var fs = require("fs");
// 제출 시, ${__dirname}/ 제거하고 사용
var input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
let list = input[1].split(" ").map((x) => parseInt(x));
let result = 0;
let arr = new Array(1001).fill(0);
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

for (let i = 0; i < list.length; i++) {
  if (arr.indexOf(list[i]) !== -1) result++;
}
console.log(result);