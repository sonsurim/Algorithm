// 백준 23968번. 알고리즘 수업 - 버블 정렬 1
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = require('fs').readFileSync(`${__dirname}/input/boj_23968.txt`).toString().trim().split('\n')
const [N, K] = input[0].split(' ').map(i => 1 * i)
const A = input[1].split(' ').map(i => 1 * i)

// N: 배열의 크기, K: 교환 횟수, A: 배열

function solution(N, K, arr) {
  let answer = ''
  let count = 0

  for(let i = 0; i < N -1; i++) {
    for(let j = 0; j < N -1 - i; j++) {
      if(arr[j] > arr[j+1]) {
        count++

        if (count === K) {
          answer = `${arr[j + 1]} ${arr[j]}`
        }

        [arr[j], arr[j +1]] = [arr[j+ 1], arr[j]]
      }
    }
  }

  return count < K ? '-1' : answer
}

console.log(solution(N,K,A));