// 문제를 직관적으로 알 수 있는 작은 단위로 쪼개는 법
// 점화식의 관계를 찾기

// 계단 오르기
const n = Number(require('fs').readFileSync(`${__dirname}/input/inf01.txt`).toString().trim())

function solution(n) {
  const dy = Array.from({ length: n + 1 }, () => 0)
  dy[1] = 1
  dy[2] = 2

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1]
  }

  return dy[n]
}

console.log(solution(n));