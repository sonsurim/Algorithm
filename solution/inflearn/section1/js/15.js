function solution(s) {
  let answer = s.length % 2 === 1  ? s.substr(Math.floor(s.length/2), 1) : s.substr(s.length/2 - 1, 2);

  return answer;
}

console.log(solution("study"))