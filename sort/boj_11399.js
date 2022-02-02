// 백준. 11399번 ATM
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = require('fs').readFileSync(`${__dirname}/input/boj_11399.txt`).toString().trim().split('\n')
const n = input[0] * 1
const arr = input[1].split(' ').map(i => i * 1)

function solution(_, arr) {
  let answer = 0

  arr.sort((a,b) => a - b)

  arr.forEach((_, idx) => {
    let waiter = 0

    for (let i = 0; i <= idx; i++) {
      waiter += arr[i]
    }

    answer += waiter
  })

  return answer
}

console.log(solution(n, arr));