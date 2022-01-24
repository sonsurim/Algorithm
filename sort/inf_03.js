// 구글 인터뷰
const input = require('fs').readFileSync(`${__dirname}/input/inf_03.txt`).toString().trim().split('\n')
const N = input[0] * 1
const arr = input[1].split(' ').map(i => 1 * i)

function solution(N, arr) {
  const answer = arr

  for(let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; i < arr.length - 1 - j; j++) {
      if (arr[j] > 0 && arr[j+1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return answer.join(' ')
}

console.log(solution(N, arr));