const input = require('fs').readFileSync(`${__dirname}/input/inf_03.txt`).toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(i => 1 * i)
const tests = []

for (let i = 1; i <= 3; i++) {
  tests.push(input[i].split(' ').map(i => 1 * i))
}

// N: 학생 수
// M: 테스트 수
// answer: 멘토,멘티 짝꿍의 경우의 수
function solution(N, M, tests) {
  let answer = 0

  // 1. 멘토를 정하기
  for (let mentor = 1; mentor <= N; mentor++) {
    // 2. 멘티를 정하기
    for (let mentee = 1; mentee <= N; mentee++) {
      let passedTestLength = 0

      // 3. 테스트를 M번 진행하기
      tests.forEach(test => {
        let mentorIdx = 0
        let menteeIdx = 0

        // 4. 테스트 1번씩 총 M번 진행
        test.forEach((student, studentIdx) => {
          if (mentor === student) {
            mentorIdx = studentIdx
          }

          if (mentee === student) {
            menteeIdx = studentIdx
          }
          console.log(test, mentor, mentee, student);
        })

        // 5. 테스트 통과 여부 확인
        if (mentorIdx < menteeIdx) {
          passedTestLength++
        }
      })

      // 6. 테스트 통과 횟수 확인
      if (passedTestLength === M) {
        answer++
      }
    }
  }

  return answer
}

console.log(solution(N, M, tests));
