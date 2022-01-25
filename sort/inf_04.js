// 삽입 정렬
const input = require('fs').readFileSync(`${__dirname}/input/inf_04.txt`).toString().trim().split('\n')
const N = input[0] * 1
const arr = input[1].split(' ').map(i => 1 * i)

function solution(N, arr) {
  for (let i = 0; i < N; i++) {
    let j
    const temp = arr[i]

    for (j = i - 1; j >= 0; j--) {
      if (arr[j] < temp) {
        break
      }

      arr[j + 1] = arr[j]
    }
    arr[j+1] = temp
  }

  return arr.join(' ')
}

console.log(solution(N, arr));