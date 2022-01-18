// 피보나치 수 5
// const n = require('fs').readFileSync('/dev/stdin').toString().trim() * 1
const n = require('fs').readFileSync(`${__dirname}/input/boj_10872.txt`).toString().trim() * 1

function solution(n) {
  let answer = 0

  const recursion = (level, prev, current) => {
    if (level === n) {
      return
    }

    answer = Math.max(answer, current)
    recursion(level + 1, current, prev === 0 ? 1 : prev + current )
  }

  recursion(0, 0, 1)
  return answer
}

console.log(solution(n));