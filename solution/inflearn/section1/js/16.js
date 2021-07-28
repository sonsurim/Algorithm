function solution(s) {
  let answer = '';

  for( let i of s) {
    if (answer.indexOf(i) === -1) answer += i;
  }

  return answer;
}

console.log(solution("ksekksessat"));
