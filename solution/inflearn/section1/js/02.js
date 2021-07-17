function solution(a, b, c) {
  let answer;
  let sum = 0;
  let long = arguments[0];

  for ( let i =0; i < arguments.length; i++) {
    sum += arguments[i];

    if ( long <= arguments[i] ) {
      long = arguments[i]
    }
  }

  answer = long < sum - long;
  answer = answer ? "YES" : "NO"
  return answer;
}

console.log(solution(13, 33, 17));