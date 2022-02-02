// 백준 23881번. 알고리즘 수업 - 선택 정렬 1
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = require('fs').readFileSync(`${__dirname}/input/boj_23881.txt`).toString().trim().split('\n')
const [N, K] = input[0].split(' ').map(i => 1 * i)
const A = input[1].split(' ').map(i => 1 * i)

// i부터 끝까지 돌면서 제일 작은 숫자를 찾아서 i번 위치에 놓기

function solution(N, K, arr) {
  let answer = '-1'
  let count = 0

  for (let i = N - 1; i >= 0; i--) {
    let idx = i

    for (let j = i - 1; j >= 0; j--) {
      if (arr[idx] < arr[j]) {
        count++

        if (count === K) {
          answer = `${arr[idx]} ${arr[j]}`
        }

        idx = j
      }
    }

    [arr[i], arr[idx]] = [arr[idx], arr[i]]
  }

  return answer
}

console.log(solution(N,K,A));