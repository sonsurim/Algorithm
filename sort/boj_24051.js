// 백준 24051번. 알고리즘 수업 - 삽입 정렬 1
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = require('fs').readFileSync(`${__dirname}/input/boj_24051.txt`).toString().trim().split('\n')
const [N, K] = input[0].split(' ').map(i => 1 * i)
const A = input[1].split(' ').map(i => 1 * i)

function solution(N,K, arr) {
  let answer = -1
  let count = 0

  for (let i = 0; i < N; i++) {
    let j
    const temp = arr[i]

    for (j = i -1; j >= 0; j--) {
      count++

      if (count === K) {
        answer = arr[j]
      }

      if (arr[j] < temp) {
        break
      }

      arr[j + 1] = arr[j]
    }

    arr[j+ 1] = temp
  }

  return answer
}

console.log(solution(N, K, A));