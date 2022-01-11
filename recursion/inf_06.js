// 최대점수 구하기

function solution(m, ps, pt) {
  let answer = 0
  const n = pt.length

  function DFS(L, sum, time) {
    if (time > m) {
      return
    }

    if (L === n) {
      answer = Math.max(answer, sum)
      return
    }

    DFS(L + 1, sum +ps[L], time + pt[L])
    DFS(L + 1, sum, time)
  }

  DFS(0, 0, 0)
  return answer
}

const ps = [10, 25, 15, 6, 7]
const pt = [5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));