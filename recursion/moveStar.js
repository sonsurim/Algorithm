/*
1. 별 쌓기 왼쪽정렬 (0은 공백)
*0000
**000
***00
****0
*****
*/

function leftSideStar() {
  let answer = ''

  const recurison = (level) => {
    if (level === 5) {
      return
    }

    for(let i = 0; i < 5; i++) {
      answer += i <= level ? '*' : ' '
    }

    answer += '\n'
    recurison(level + 1)
  }

  recurison(0)
  return answer
}

console.log(leftSideStar());


/*
2. 별 쌓기 오른쪽 정렬 (0은 공백)
0000*
000**
00***
0****
*****
*/

function rightSideStar() {
  let answer = ''

  const recursion = (level) => {
    if (level === 6) {
      return
    }

    for (let i = 5; i > 0; i--) {
      answer +=level < i ? ' ' : '*'
    }

    answer += '\n'
    recursion(level + 1)
  }

  recursion(1)
  return answer
}

console.log(rightSideStar());


/*
3. 별 쌓기 중앙 정렬 (0은 공백)
00*00
0***0
*****
*/

function centerSideStar() {
  let answer = ''

  const recursion = (level) => {
    if (level === 3) {
      return
    }

    for(let i = 0; i <5; i++) {
      answer += 2 - level <= i && i <= 2 + level ? '*' : ' '
    }

    answer += '\n'
    recursion(level + 1)
  }

  recursion(0)
  return answer
}

console.log(centerSideStar());