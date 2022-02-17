// 최대 점수 구하기
const input = require('fs').readFileSync(`${__dirname}/input/inf05.txt`).toString().trim().split('\n')
const [n, m] = input[0].split(' ').map(i => Number(i))
const arr = input.filter((_, _idx) => _idx).map((item, idx) => item.split(' ').map(i => Number(i)))

// 내 풀이
// function solution(n, m, arr) {
//   let answer = 0

//   const recursion = (level, score, time) => {
//     if (time > m || level > n) {
//       return
//     }

//     if (time === m) {
//       return answer = Math.max(answer, score)
//     }

//     arr.forEach(([_score, _time]) => {
//       recursion(level + 1, score+ _score, time + _time )
//     })
//   }

//   recursion(0, 0, 0)
//   return answer
// }

// console.log(solution(n, m, arr));

// dp 풀이
// 동전 교환처럼 앞에서부터 순회하면 중복이 걸림!
// Ex. 10분에서 5분일 때 5분문제에 대한 중복
// 1. 해당하는 시간에 대한 점수를 기록할 다이나믹 테이블을 생성
// 2. 문제들을 순회
// 3. 문제가 중복되지 않게 거꾸로 순회, 문제 푸는 시간까지만 순회하면 된다.
// 현재 점수를 구할 시간 - 문제 푸는 시간의 점수에서 현재 문제의 점수를 더한다
// 최대 점수를 비교해서 값을 갱신한다

function solution(_, limitTime, problemInfo) {
  const scoreArr = Array.from({ length: limitTime + 1 }, () => 0)

  problemInfo.forEach(([score, time]) => {
    for(let currentTime = limitTime; currentTime >= time; currentTime--) {
      scoreArr[currentTime] = Math.max(scoreArr[currentTime], scoreArr[currentTime - time] + score)
    }
  })

  return scoreArr[limitTime]
}

console.log(solution(n, m, arr));