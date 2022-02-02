// 백준 11053번. 가장 긴 증가하는 부분 수열
const input = require('fs').readFileSync(`${__dirname}/input/boj_11053.txt`).toString().trim().split('\n')
const arr = input[1].split(' ').map(num => Number(num))

function solution(arr) {
  const seqArr = Array.from({ length: arr.length }, (_,idx) => idx === 0 ? 1: 0)

  for(let currentNum = 1; currentNum < arr.length; currentNum++) {
    let maxLength = 0

    for (let forwardNum = currentNum - 1; forwardNum >= 0; forwardNum--) {
      if (arr[currentNum] > arr[forwardNum] && seqArr[forwardNum] > maxLength) {
        maxLength = seqArr[forwardNum]
      }
    }

    seqArr[currentNum] = maxLength + 1
  }

  return Math.max(...seqArr)
}

console.log(solution(arr));