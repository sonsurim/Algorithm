// 팩토리얼
// const N = require('fs').readFileSync('/dev/stdin').toString().trim() * 1
const N = require('fs').readFileSync(`${__dirname}/input/boj_10872.txt`).toString().trim() * 1

function solution(N) {
  let answer = 1

  for(let i = N; i >= 1; i--) {
    answer *= i
  }

  return answer ? answer : 1
}

console.log(solution(N));