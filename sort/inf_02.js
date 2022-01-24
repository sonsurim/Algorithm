// 버블 정렬
const input = require('fs').readFileSync(`${__dirname}/input/inf_02.txt`).toString().trim().split('\n')
const N = input[0] * 1
const arr = input[1].split(' ').map(i => 1 * i)

function solution(_, arr) {
  let answer = ''

  for (let i = 0; i < arr.length - 1; i++) {

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        [[arr[j], arr[j+1]]] = [[arr[j+1], arr[j]]]
      }
    }
  }

  answer = arr.join(' ')
  return answer
}

console.log(solution(N, arr));