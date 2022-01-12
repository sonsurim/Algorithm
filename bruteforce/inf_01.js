// 자리수의 합
const input = require('fs').readFileSync(`${__dirname}/input/inf_01.txt`).toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(i => 1 * i)
// const arr = input[1].split(' ')


// 나의 풀이 (arr의 내용들이 문자열인 경우로만 고려)
// function solution(n, arr) {
//   let answer = 0
//   let maxNum = Number.MIN_SAFE_INTEGER

//   arr.forEach(item => {
//     const itemArr = item.split('').map(i => 1 * i)
//     const sum = itemArr.reduce((a, b) => a + b, 0)

//     if (maxNum <= sum) {
//       maxNum = sum
//       answer = Math.max(answer, item)
//     }
//   })

//   return answer
// }

// console.log(solution(n,arr));


// 정답 풀이 (arr의 내용이 숫자인 경우)
// function solution(n, arr) {
//   let answer = 0
//   let maxNum = Number.MIN_SAFE_INTEGER

//   arr.forEach(item => {
//     let sum = 0
//     let temp = item

//     while(temp) {
//       sum += temp % 10
//       temp = Math.floor(temp / 10)
//     }

//     if (sum >= maxNum) {
//       maxNum = sum
//       answer = Math.max(answer, item)
//     }

//     console.log(item);
//   })

//   return answer
// }

// console.log(solution(n, arr));

// 정답 풀이 2
function solution(n, arr) {
  let answer = 0
  let maxNum = Number.MIN_SAFE_INTEGER

  arr.forEach(item => {
    const sum = item.toString().split('').reduce((a, b) => a + Number(b), 0)

    if (sum >= maxNum) {
      maxNum = sum
      answer = Math.max(answer, item)
    }

  })

  return answer
}

console.log(solution(n, arr));