// 구간 합 구하기 4 (시간초과)
const [[n, m], arr, ...sections] = require('fs').readFileSync(`${__dirname}/input/boj_11659.txt`).toString().trim().split('\n').map(item => item.split(' ').map(i => Number(i)))
// const [[n, m], arr, ...sections] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(item => item.split(' ').map(i => Number(i)))

function solution(arr, sections) {
  let answer = ''

  sections.forEach(([startPoint, endPoint]) => {
    const result = arr.reduce((prev, cur, idx) => idx + 1 >= startPoint && idx + 1 <= endPoint ? prev + cur : prev, 0)

    answer += `${result}\n`
  })

  return answer
}

console.log(solution(arr, sections));