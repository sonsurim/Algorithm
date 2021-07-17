function solution(n) {
  let answer = n % 12 === 0 ? n/12 : Math.ceil(n/12);
  return answer;
}

console.log(solution(8));