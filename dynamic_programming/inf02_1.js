// 만약에 한칸, 두칸 또는 세칸씩 건너 뛰면서 갈 수 있다면 그 때의 경우의 수는 어떻게 구할까?

function solution(n) {
  const temp = Array.from({ length: n + 1 }, () => 0)

  temp[0] = 1
  temp[1] = 1
  temp[2] = 2

  for(let i = 3; i <= n; i++) {
    temp[i] = temp[i - 1] + temp[i - 2] + temp[i -3]
  }

  return(temp[n])
}

console.log(solution(5));