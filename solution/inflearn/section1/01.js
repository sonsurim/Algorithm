function solution(a, b, c){
  let answer = solution.arguments[0];

  for ( let i = 0; i < solution.arguments.length; i++ ) {
    if ( answer >=  solution.arguments[i] ) {
      answer = solution.arguments[i];
    }
  }

  return answer;
}

console.log(solution(2, 0, 3));
