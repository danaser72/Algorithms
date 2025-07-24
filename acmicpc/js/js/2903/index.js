/**
 * [규칙]
 * 초기 상태 : 점 2개
 * 1 : 한면의 점 2개 사이에 점이 1개 더 찍힘 (더찍히는 점의 개수는 한면의 점 개수 - 1) > 한 면의 점 3개 > 총 점 9개의 정사각형 (3 * 3 = 9)
 * 2 : 한면의 점 3개 사이에 점이 2개 더 찍힘 > 한 면의 점 5개 > 총 점 25개의 정사각형 (5 * 5 = 25)
 * 3 : 한면의 점 5개 사이에 점이 4개 더 찍힘 > 한 면의 점 9개 > 총 점 81개의 정사각형 (9 * 9 = 81)
 * ...
 */
var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
var N = parseInt(input);
let result = 2;
for (let i = 0 ; i < N ; i++){
  result += (result - 1);
}
console.log(result * result);