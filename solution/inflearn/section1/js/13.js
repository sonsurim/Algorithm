// 1. 내장함수 이용
function solution(s) {
  let answer = '';

  for (let i of s) {
    if (i === i.toLowerCase()) answer+= i.toUpperCase();
    else answer += i.toLowerCase();
  }

  return answer;
}

console.log(solution("StuDY"));