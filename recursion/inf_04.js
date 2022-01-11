// 합이 같은 부분집합 구하기

function solution(arr) {
  let flag = 0
  let answer = 'NO'
  const total = arr.reduce((a, b) => a + b, 0)
  const n = arr.length

  function DFS(L, sum) {
    if (flag) {
      return
    }

    if (L === n) {
      if ((total - sum) === sum) { // 반대편 부분집합의 합과 같느냐
        answer = 'YES'
        flag = 1
      }
      // 부분집합 하나 완성
      return
    }
      DFS(L + 1, sum+arr[L])
      DFS(L + 1, sum)
  }

  DFS(0, 0)
  return answer
}

const arr = [1, 3, 5, 6, 7, 10]
console.log(solution(arr));