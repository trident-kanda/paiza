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
  const map = new Map();
  const splitLine = lines[0].split(" ");
  const height = splitLine[0];
  const width = splitLine[1];
  const savePointCount = splitLine[2];
  for (let heightCount = 1; heightCount <= height; heightCount++) {
    for (let widthCount = 0; widthCount < width; widthCount++) {
      const nowPoint = lines[heightCount][widthCount];
      if (nowPoint !== "#") {
        map.set(nowPoint, { height: heightCount, width: widthCount + 1 });
      }
    }
  }
  const startPointheight = map.get("N").height;
  const startPointWidth = map.get("N").width;
  map.delete("N");
  const difrenceArray = [];
  for (let count = 1; count <= savePointCount; count++) {
    const pointHeight = map.get(String(count)).height;
    const pointWidth = map.get(String(count)).width;
    const difrence =
      Math.abs(startPointheight - pointHeight) +
      Math.abs(startPointWidth - pointWidth);
    difrenceArray.push(difrence);
  }
  const min = Math.min(...difrenceArray);
  let resultCount = 0;
  const resultArray = [];
  difrenceArray.forEach((item, num) => {
    if (item === min) {
      resultCount += 1;
      resultArray.push(num + 1);
    }
  });
  console.log(resultCount);
  resultArray.forEach((item) => {
    console.log(item);
  });
});
