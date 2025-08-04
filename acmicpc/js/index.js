/**
 * 이 파일을 실행해보자!
 *  - node index.js 2557
 *  - 입력값은 각 폴더 내부의 /dev/stdin을 수정해보자
 */
const _path = require("path");
var sampleName = process.argv[2];
if (!sampleName) {
  console.error("[Error] Insert question number");
  process.exit(1);
}

try {
  const samplePath = _path.join(__dirname, "js", sampleName, "index.js");
  require(samplePath, sampleName);
} catch (error) {
  console.error("[Error] Occured error: ", error);
}
