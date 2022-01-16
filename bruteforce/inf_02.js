const input = require('fs').readFileSync(`${__dirname}/input/inf_02.txt`).toString().trim().split('\n')
const N = Number(input[0])
const arr = input[1].split(' ').map(i => 1 * i)

// while문을 이용해서 숫자 reverse 시키기 (성능이 훨씬 우위하다!)
function solution(_, arr) {
  const answer = []

  const isPrime = num => {
    if (num === 1) {
      return false
    }

    for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
      // 약수 발견 => 소수 x
      if (num % i === 0) {
        return false
      }
    }

    return true
  }

  arr.forEach(num => {
    let reverseNum = 0

    while(num) {
      const dividend = num % 10

      num = Math.floor(num/10)
      reverseNum = reverseNum * 10 + dividend
    }

    if (isPrime(reverseNum)) {
      answer.push(reverseNum)
    }
  })

  return answer
}

console.log(solution(N, arr));

// 고차 함수를 이용해서 숫자 reverse 시키기
/*
function solution(_, arr) {
  const answer = []

  const isPrime = num => {
    if (num === 1) {
      return false
    }

    for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
      // 약수 발견 => 소수 x
      if (num % i === 0) {
        return false
      }
    }

    return true
  }

  arr.forEach(num => {
    const reverseNum = `${num}`.split('').reverse().join('') * 1

    if (isPrime(reverseNum)) {
      answer.push(reverseNum)
    }
  })

  return answer
}

console.log(solution(N, arr));
*/