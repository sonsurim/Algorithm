// 바둑이 승차

function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER
  const n = arr.length

  function DFS(L, sum) {
    if (sum > c ) {
      return
    }

    if ( L === n ) {
      answer = Math.max(answer, sum)
      return
    }

    DFS(L + 1, sum+arr[L])
    DFS(L + 1, sum)
  }

  DFS(0, 0)
  return answer
}

const arr = [81, 58, 42, 33, 61]
console.log(solution(259, arr));