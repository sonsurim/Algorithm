// 백준 5635번. 생일

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = require('fs').readFileSync(`${__dirname}/input/boj_5635.txt`).toString().trim().split('\n')
const n = 1 * input[0]
const arr = input.filter((_, idx) => idx !== 0).map(item =>
  item.split(' ').map(_item => {
    if (!isNaN(1 * _item)) {
      return 1 * _item
    }
    return _item
  }))


function solution(n, arr) {
  arr.sort(((a, b) => {
    if (a[3] > b[3]) {
      return -1
    }

    if (a[3] === b[3] && a[2] > b[2]) {
      return -1
    }

    if (a[2] === b[2] && a[1] > b[1]) {
      return -1
    }

  }))

  return `${arr[0][0]}\n${arr[n -1][0]}`
}

console.log(solution(n, arr));