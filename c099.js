process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const splitLine = lines[0].split(" ");
  const sheetCount = Number(splitLine[0]);
  const oneSideLength = Number(splitLine[1]);
  let sum = Number(oneSideLength);
  for (let count = 1; count < sheetCount; count++) {
    const minus = Number(lines[count]);
    sum = sum + oneSideLength - minus;
  }
  const area = sum * oneSideLength;
  console.log(area);
});
