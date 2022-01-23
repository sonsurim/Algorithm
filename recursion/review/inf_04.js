// 부분집합 구하기

function solution(n) {
  const answer = []
  const checkNum = Array.from({ length: n + 1 }, i => 0)

  const recursion = (num) => {
    if (num === n + 1) {
      const numSet = []

      checkNum.forEach((item, idx) => {
        if (item === 1) {
          numSet.push(idx)
        }
      })

      if (numSet.length) {
        answer.push(numSet)
      }
      return
    }

    checkNum[num] = 1
    recursion(num + 1)
    checkNum[num] = 0
    recursion(num + 1)
  }

  recursion(1)
  return answer
}

console.log(solution(3));