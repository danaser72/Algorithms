/**
 * [유클리드 호제법] : https://namu.wiki/w/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C%20%ED%98%B8%EC%A0%9C%EB%B2%95
 * - 두 양의 정수 a, b (a > b)에 대하여, a = bq + r (O <= r < b)이라 하면, a, b의 최대공약수는 b, r의 최대공약수와 같다. 즉
 *   gcd(a, b) = gcd(b, r),
 *   r = 0 이라면, a, b의 최대공약수는 b가 된다
 * - (최소공배수) = A * B / (최대공약수)가 된다!!!!
 */
const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ").map(x => parseInt(x)).sort((a, b) => a - b);
let A = BigInt(input[0]);
let B = BigInt(input[1]);
const gcd = (m, n) => {
  if(m % n === 0) return n;
  return gcd(n, m % n)
}
console.log(`${A * B / BigInt(gcd(input[0], input[1]))}`);