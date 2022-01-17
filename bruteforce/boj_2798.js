// 블랙잭
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = require('fs').readFileSync(`${__dirname}/input/boj_2798.txt`).toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(i => 1 * i)
const arr = input[1].split(' ').map(i => 1 * i)

function solution(_, M, arr) {
  let answer = Number.MIN_SAFE_INTEGER

  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      for(let k = j +1; k < arr.length; k++) {
        const sum = arr[i] + arr[j] + arr[k]

        if (sum <= M) {
          answer = Math.max(answer, sum)
        }
      }
    }
  }

  return answer
}

console.log(solution(N, M, arr));