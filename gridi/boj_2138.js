const input = require('fs').readFileSync(`${__dirname}/input/boj_2138.txt`).toString().trim().split('\n')
const n = input[0] * 1

// 10만개면 dfs로 못풀 것 같다..
// dp 같이 접근해야하나?


function solution(n, origin, result) {
  let answer = Number.MAX_SAFE_INTEGER
  const breakPointArr = Array.from({ length: n }, () => 1)
  const breakPoint = breakPointArr.join('')

  const recursion = (L, switchArr) => {
    if ( L === switchArr.length) {
      return
    }

    console.log(switchArr);
    if ([...switchArr].join('') === result) {
      console.log(switchArr);
      return
    }

    // 불가능한 경우??
    if ([...switchArr].join('') === breakPoint) {
      return
    }


    for(let i = 0; i < n; i++) {
      if (i === 0) {
        switchArr[0] = switchArr[0] === 0? 1 : 0
        switchArr[1] = switchArr[1] === 0? 1 : 0
        recursion(L+1, switchArr)
      }

      if (i === n - 1) {
        switchArr[i] = switchArr[0] === 0? 1 : 0
        switchArr[i-1] = switchArr[0] === 0? 1 : 0
        recursion(L+1, switchArr)
      }

      if ( i !== 0 && i !== n - 1) {
        switchArr[i+1] = switchArr[0] === 0? 1 : 0
        switchArr[i-1] = switchArr[0] === 0? 1 : 0
        recursion(L+1, switchArr)
      }
    }
  }

  recursion(0, [0,0,0])
  return answer
}

solution(n, input[1], input[2])