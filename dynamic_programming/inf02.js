// 돌다리 건너기
// 돌이 7개면 육지는 8번째기 때문에 n +1을 해준다.

function solution(n) {
  const temp = Array.from({ length: n + 2 }, () => 0)
  temp[1] = 1
  temp[2] = 2

  for (let i = 3; i <= n + 1; i++) {
    temp[i] = temp[i - 1] + temp[i - 2]
  }

  return temp[n+ 1]
}

console.log(solution(7));