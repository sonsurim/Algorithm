const [N, T1, T2] = require('fs').readFileSync(`${__dirname}/input/boj_7490.txt`).toString().trim().split('\n').map(i => 1 * i)

function solution(N, T1, T2) {
  let answer = ''

  // 1. 숫자 정하기
  for(let i = 1; i<=T1; i++) {
    // 2. 연산할 다음 숫자 정하기
    for (let j = i + 1; j <= T1; j++) {
      // 3. 연산할 숫자...

      for (let k = j +1; k <= T1; k++) {

        // 3. 연산해보기
        for (let s = 0; s < 2; s++) {
          const res = !s ? `${i}-${j}` : `${i}+${j}`;

          for (let r=0; r <2; r++) {
            const formula = !r ? `${res}-${k}` : `${res}+${k}`;

            if (eval(formula) === 0) {
              answer = answer.length ?  + `${answer}\n${formula}` : formula
            }
          }
        }
      }
    }
  }

  return answer
}

console.log(solution(N, T1, T2));