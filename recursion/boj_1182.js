// 한 줄에 공백으로 값이 들어올 때
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
// 한 줄에 하나씩 값이 들어올 때
// const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n')
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, S] = input[0].split(' ').map(i => 1* i)
const arr = input[1].split(' ').map(i => 1 * i)

function solution(N, S, arr) {
  let answer = 0

  const DFS = (i, sum) => {
    if (i === N) {
      return
    }

    if (sum+arr[i] === S) {
      answer++
    }

    DFS(i + 1, sum+arr[i])
    DFS(i + 1, sum)
  }

  DFS(0, 0)
  return answer
}

console.log(solution(N, S, arr));