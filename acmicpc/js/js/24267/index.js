/**
 * [풀이]
 * - 수행 횟수 : 시그마 공식으로 계산해보면..
 * n-2    n-1      n
 *  ∑  *   ∑   *   ∑    = n(n-1)(n-2)/6
 * i=1   j=i+1   k=j+1
 * 
 * 공식 넣어서 해보자
 * - 수행 시간 : n ^ 3에 비례
 */
var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
let n = BigInt(parseInt(input));
console.log(`${(n * (n - 1n) * (n - 2n)) / 6n}\n3`);