process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const splitLine = lines[0].split(" ")
  const N = splitLine[0]
  const X = splitLine[1]
  const Y = splitLine[2]
  for(let count = 1; count <= N; count++){
      if( count % X === 0 && count % Y === 0){
          console.log("AB")
      }
      else if (count % X === 0){
          console.log("A")
      }else if (count % Y === 0){
          console.log("B")
      }
      else{
          console.log("N")
      }
  }
});
