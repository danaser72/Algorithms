var fs = require("fs");
// 제출 시, ${__dirname}/ 제거하고 사용
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
// 엄청난 문제가 있는 소스 - 배열이 서로를 참조하게 됨
//let arr = new Array(100).fill(new Array(100).fill(0));
let arr = Array.from({ length: 100 }, () => new Array(100).fill(0));

const setPager = (x, y) => {
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      arr[i][j] = 1;
    }
  }
}
for (let i = 1; i < input.length; i++) {
  const point = input[i].trim().split(" ").map((x) => parseInt(x));
  setPager(point[0], point[1]);
}
console.log(arr.flat().filter((x) => x === 1).length);