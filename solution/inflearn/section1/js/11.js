// Case1. split + for
function solution(s) {
  let answer = 0;
  let arr = s.split('');

  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] === arr[i].toUpperCase()) answer++
  }

  return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));

// Case2. Regexp
function solution2(s) {
  return s.match(/[A-Z]/g)?.length ? s.match(/[A-Z]/g).length : 0;
}

let str2="KoreaTimeGood";
console.log(solution2(str2));