var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
for (let t = 0; t < input.length - 1; t++) {
  let N = parseInt(input[t]);
  let arr = [];
  for (let i = 1; i * i <= N; i++) {
    if (N % i === 0) {
      arr.push(i);
      if (parseInt(N / i) !== i && i !== 1) arr.push(parseInt(N / i));
    }
    arr.sort((a, b) => a - b);
  }
  if (N === arr.reduce((acc, cur) => acc + cur, 0)) {
    console.log(`${N} = ${arr.join(" + ")}`);
  } else {
    console.log(`${N} is NOT perfect.`);
  }
}