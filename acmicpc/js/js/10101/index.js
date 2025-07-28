var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n").map(x => parseInt(x));
if (input[0] + input[1] + input[2] === 180) {
  if (input[0] === input[1] || input[0] === input[2] || input[1] === input[2]) {
    if (input[0] === input[1] && input[0] === input[2]) {
      console.log("Equilateral");
    } else {
        console.log("Isosceles");
    }
  } else {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}