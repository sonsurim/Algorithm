function solution(n) {
  let count = 1;
  let answer = 0;

  while(count <= n) {
    answer += count;
    count++;
  }

  return answer;
}

console.log(solution(15));