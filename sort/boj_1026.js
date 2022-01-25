// 백준 1026번. 보물
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = require('fs').readFileSync(`${__dirname}/input/boj_1026.txt`).toString().trim().split('\n')
const n = input[0] * 1
const arr = []

input.forEach((item, idx) => {
  if (!idx) {
    return
  }

  arr.push(item.split(' ').map(i => 1 * i))
})

function solution(n, [a, b]) {
  const sortedA = Array.from({ length: n }, _ => 0)
  const originB = [...b]

  a.sort((a,b) => a - b)

  a.forEach((aItem, _) => {
    let maxNum = 0
    let maxIdx = 0

    b.forEach((bItem, bIdx) => {
      if (aItem === 0 && maxNum <= bItem) {
        maxNum = bItem
        maxIdx = bIdx
      }

      if (maxNum <= aItem * bItem) {
        maxNum = Math.max(maxNum, bItem)
        maxIdx = b.indexOf(maxNum)
      }

    })

    sortedA[maxIdx] = aItem
    b[maxIdx] = -1
  })

  return sortedA.reduce((acc, cur, curIdx) => acc += cur * originB[curIdx], 0)
}

console.log(solution(n, arr));