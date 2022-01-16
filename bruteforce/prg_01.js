// 모의고사
const input = require('fs').readFileSync(`${__dirname}/input/prg_01.txt`).toString().trim().split(' ').map(i => 1 * i)

function solution(answers) {
  const answer = []
  const student1 = [1,2,3,4,5]
  const student2 = [2,1,2,3,4,2,5]
  const student3 = [3,3,1,1,2,2,4,4,5,5]
  const correct = Array.from({length: 3}, _ => 0)

  answers.forEach((answer, idx) => {
    if (answer === student1[idx % student1.length]) {
      correct[0]++
    }

    if (answer === student2[idx % student1.length]) {
      correct[1]++
    }

    if (answer === student3[idx % student1.length]) {
      correct[2]++
    }
  })

  const max = Math.max(correct[0], correct[1], correct[2])

  if (correct[0] === max) {answer.push(1)};
  if (correct[1] === max) {answer.push(2)};
  if (correct[2] === max) {answer.push(3)};

  return answer
}

console.log(solution(input));

// function solution(answers) {
//   const answer = []
//   const patterns = [[1,2,3,4,5], [2,1,2,3,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
//   const newPatterns = Array.from({ length: patterns.length }, _ => [])

//   const students = {
//     1: 0,
//     2: 0,
//     3: 0
//   }

//   // answer의 길이만큼 패턴을 늘리기
//   patterns.forEach((pattern, i) => {
//     let count = 0

//     answers.forEach(_ => {
//       if (!pattern[count]) {
//         count = 0
//       }

//       newPatterns[i].push(pattern[count])
//       count++
//     })
//   })

//   // 정답과 패턴을 하나하나 확인하기
//   newPatterns.forEach((pattern, i) => {
//     answers.forEach((item, j) => {
//       if (pattern[j] === item) {
//         students[i + 1]++
//       }
//     })
//   })

//   // 비교하기 ㅠ_ㅠ..

//   return answer
// }

// console.log(solution(input));