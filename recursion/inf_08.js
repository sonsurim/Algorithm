// 동전 교환
const input = require('fs').readFileSync(`${__dirname}/input/inf_08.txt`).toString().trim().split('\n')
const [S, _, M] = input.map(i => 1* i)
const N = input[1].split(' ').map(i => 1 * i)

function solution(S, N, M) {
  let answer = Number.MAX_SAFE_INTEGER

  const recursive = (L, sum) => {
    // L : 동전을 몇개 사용했는지
    // sum: 15원 (M)
    if (sum > M) {
      // 헷갈렸던 부분! 15이상인 경우(1:14, 2:1 = 16 같은 경우)에는 무한 재귀가 돌 수 있어서 빠져나와주어야 함
      return
    }

    if ( L >= answer ) {
      // 최소 동전 개수를 구하기 때문에 현재 나와있는 동전 개수 이상으로 크거나 같을 때 구할 필요는 없다
      return
    }

    if (sum === M) {
      // 합이 M인 경우, L이 동전을 몇개 사용 했는지 체크하면 되는 데, 이 때 최소 동전 개수를 구해야하기 때문에 비교하여 넣어줌
      answer = Math.min(answer, L)
      return
    }

    N.forEach(item => {
      recursive(L + 1, sum+item)
    })
  }

  recursive(0, 0)
  return answer
}

console.log(solution(S, N, M));
