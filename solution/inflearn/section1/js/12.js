// 1. 내장함수 이용
function solution(s) {
  return s.toUpperCase();
}

let str="ItisTimeToStudy";
console.log(solution(str));

// 2. for...of 문 이용
function solution2(s) {
  let answer = '';

  for (let x of s) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }

  return answer;
}

let str2="ItisTimeToStudy";
console.log(solution2(str2));

// 3.아스키 코드 이용
function solution3(s) {
  let answer = '';

  for (let x of s ) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer+= String.fromCharCode(num-32);
    else answer += x;
  }
  return answer;
}

let str3="ItisTimeToStudy";
console.log(solution3(str3));