// 부분집합 구하기
// 1. 스위치 배열 만들기
// 2. 재귀 함수 만들기, 종료조건 설정
// 3. 스위치 켜고 끄기
// 4. 스위치 배열을 부분집합으로 변경하기

function solution(n) {
  const answer = []
  const switchArr = Array.from({ length: n + 1 }, () => 0)

  const recursion = (depth) => {
    if (depth === n + 1) {
      let temp = ''

      for (let i = 1; i <= n; i++) {
        if (switchArr[i] === 1) {
          temp += `${i} `
        }
      }

      if (temp.length) {
        answer.push(temp.trim())
      }
      return
    }

    switchArr[depth] = 0
    recursion(depth + 1)
    switchArr[depth] = 1
    recursion(depth + 1)

  }

  recursion(1)
  return answer
}

console.log(solution(3));