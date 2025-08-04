const fs = require("fs");
const [N, M] = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split(" ")
  .map((x) => parseInt(x));
let result = "";
const check = (obj) => {
  if (Object.keys(obj).length === M + 1) result += `${obj["str"]}\n`;
  for (let i = 1; i <= N; i++) {
    if (obj[i]) continue;
    obj[i] = true;
    const tmp = obj["str"];
    obj["str"] = (tmp + " " + i).trim();
    check(obj);
    delete obj[i];
    obj["str"] = tmp;
  }
};
check({ str: "" });
console.log(result.trim());
