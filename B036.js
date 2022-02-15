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
  const candidateNum = Number(lines[0]);
  const votes = lines[candidateNum + 1];
  const republicanMap = new Map();
  const democraticMap = new Map();
  for (
    let candidateCount = 1;
    candidateCount <= candidateNum;
    candidateCount++
  ) {
    const className = lines[candidateCount];
    if (className === "Republican") {
      republicanMap.set(candidateCount, 0);
    }
    if (className === "Democratic") {
      democraticMap.set(candidateCount, 0);
    }
  }
  for (let i = 0; i < votes; i++) {
    const array = lines[candidateNum + 2 + i].split(" ");
    republicanCheck = false;
    democraticCheck = false;
    array.forEach((candidate) => {
      const className = lines[Number(candidate)];
      if (!republicanCheck && className === "Republican") {
        republicanMap.set(
          Number(candidate),
          republicanMap.get(Number(candidate)) + 1
        );
        republicanCheck = true;
      }
      if (!democraticCheck && className === "Democratic") {
        democraticMap.set(
          Number(candidate),
          democraticMap.get(Number(candidate)) + 1
        );
        democraticCheck = true;
      }
    });
  }
  let repblicanTop;
  let democraticTop;
  let max = -1;
  republicanMap.forEach((item, key) => {
    if (max < item) {
      max = item;
      repblicanTop = key;
    }
  });
  max = -1;
  democraticMap.forEach((item, key) => {
    if (max < item) {
      max = item;
      democraticTop = key;
    }
  });

  let repblicanCount = 0;
  let democraticCount = 0;

  for (let i = 0; i < votes; i++) {
    const array = lines[candidateNum + 2 + i].split(" ");
    let check = false;
    array.forEach((item) => {
      if (!check && repblicanTop === Number(item)) {
        repblicanCount++;
        check = true;
      }
      if (!check && democraticTop === Number(item)) {
        democraticCount++;
        check = true;
      }
    });
  }
  if (repblicanCount > democraticCount) {
    console.log(repblicanTop);
  } else {
    console.log(democraticTop);
  }
});
