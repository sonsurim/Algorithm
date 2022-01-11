// 십진수를 이진수로 변환

function solution(n) {
  let answer = ''

  function DFS(L) {
    if (L === 0) {
      return
    }

    DFS(Math.floor(L / 2))
    answer += L % 2
  }

  DFS(n)
  return answer
}

console.log(solution(11));