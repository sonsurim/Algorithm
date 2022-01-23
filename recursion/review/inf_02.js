// 재귀함수를 이용한 이진수 출력

// 이진수: 10진수의 수가 1이 될 때까지 계속 나눌 때 나오게 되는 나머지를 이용
// 재귀 호출로 인해 스택이 쌓이는 원리를 이용
// 재귀 앞: 문자열 뒤로 증가
// 재귀 뒤: 문자열 앞으로 증가

function solution(N) {
  let answer = ''

  const recursion = (result) => {
    if (result === 0) {
      return
    }

    recursion(Math.floor(result / 2))
    answer += result % 2
  }

  recursion(N)
  return answer
}

console.log(solution(11));