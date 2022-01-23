// 재귀 함수

function solution(N) {
  let answer = ''

  const recursion = (level) => {
    if (level === N + 1) {
      return
    }

    answer += `${level} `
    recursion(level + 1)
  }

  recursion(1)
  return answer
}

console.log(solution(3));