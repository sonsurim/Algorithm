function solution(s) {
  return [...new Set(s)];
}

let str=["good", "time", "good", "time", "student"];
console.log(solution(str));