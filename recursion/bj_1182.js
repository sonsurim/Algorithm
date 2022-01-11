function solution(t, arr) {
  let answer = 0
  const n = arr.length

  function DFS(L, sum) {
    if (L === n) {
      if (sum === t) {
        answer++
      }
      return
    }

    DFS(L + 1, sum+arr[L])
    DFS(L + 1, sum)
  }

  DFS(0, 0)
  return answer
}

const arr = [-7, -3, -2, 5, 8]
console.log(solution(0, arr));