var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
for (let i = 0; i < input.length; i++) {
  const arr = input[i].trim().split(" ").map((x) => parseInt(x)).sort((a, b) => a - b);
  if (arr[0] === 0 && arr[1] === 0 && arr[2] === 0) break;

  if (arr[0] + arr[1] > arr[2]) {
    if (arr[0] === arr[1] || arr[0] === arr[2] || arr[1] === arr[2]) {
      if (arr[0] === arr[1] && arr[1] === arr[2]) {
        console.log("Equilateral");
      } else {
        console.log("Isosceles");
      }
    } else {
      console.log("Scalene");
    }
  } else {
    console.log("Invalid");
  }
}
