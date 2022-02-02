// 선택 정렬
const input = require('fs').readFileSync(`${__dirname}/input/inf_01.txt`).toString().trim().split('\n')
const N = input[0] * 1
const arr = input[1].split(' ').map(i => 1 * i)

function solution(_, arr) {
  let answer = ''

  for(let i = 0; i < arr.length - 1; i++) {
    let idx = i

    for(let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) {
        idx = j
      }
    }

    [arr[i], arr[idx]] = [arr[idx], arr[i]]
  }

  answer = arr.join(' ')
  return answer
}

console.log(solution(N, arr));