const input = require('fs').readFileSync(`${__dirname}/input/inf_03.txt`).toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(i => 1 * i)
const arr1 = input[1].split(' ').map(i => 1 * i)
const arr2 = input[2].split(' ').map(i => 1 * i)
const arr3 = input[3].split(' ').map(i => 1 * i)

// N: 학생 수
// M: 테스트 수
// answer: 멘토,멘티 짝꿍의 경우의 수
function solution(N, M, arr) {
  let answer = 0
  const temp = []

  for(let i = 1; i<=N; i++) {
    const mentor = i
    for(let j = 1; j<=N; j++) {
      const mentee = j
      // 멘토, 멘티 정해지고 나서 k번 테스트 진행 횟수 카운트
      let passedTestLength = 0

      arr.forEach((test, k) => {
        let mentorIdx = 0
        let menteeIdx = 0

        test.forEach((item, s) => {
          if (item === mentor) {
            mentorIdx = s
          }
          if (item === mentee) {
            menteeIdx = s
          }
        })

        if (mentorIdx < menteeIdx) {
          passedTestLength++
        }
      })

      // 테스트의 모든 종류를 다 통과해야함
      if (passedTestLength === M) {
        temp.push([mentor, mentee])
        answer++
      }
    }
  }

  return answer
}

console.log(solution(N, M, [arr1, arr2, arr3]));
