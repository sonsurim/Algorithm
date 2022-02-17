// 십진수를 이진수로 만들기

function solution(n) {
  let answer = ''

  const recursion = (num) => {
    if (num <= 0) {
      return
    }


    recursion(Math.floor(num / 2))
    answer += num % 2
  }

  recursion(11)
  return answer
}

console.log(solution(11));