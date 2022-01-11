// 중복 순열 구하기
// m의 n중 for문을 도는 재귀함수

function solution(m, n) {
  const answer = []
  const temp = Array.from({length: n}, () => 0)

  const DFS = (L) => {
    // 중복 순열의 배열이 완성되는 시점
    if (L === n) {
      answer.push(temp.slice())
      return
    }

    for(let i = 1; i <= m; i++) {
      temp[L] = i
      DFS(L + 1)
    }
  }

  DFS(0)
  return answer
}

console.log(solution(3, 2));