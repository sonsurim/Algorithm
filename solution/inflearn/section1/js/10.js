// case1
function solution(s, t) {
  console.time('s1');
  const reg = new RegExp(t, 'g');
  let answer = s.match(reg).length;

  console.timeEnd('s1');
  return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));

// case2
function solution2(s, t) {
  console.time('s2');
  let answer = 0;

  for (let i of s) {
    if (i === t) answer++;
  }

  console.timeEnd('s2');
  return answer;
}

let str2="COMPUTERPROGRAMMING";
console.log(solution2(str2, 'R'));

// case3
function solution3(s, t) {
  console.time('s3');
  let answer = 0;
  let arr = s.split('');

  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] === t ) answer++
  }

  console.timeEnd('s3');
  return answer;
}

let str3="COMPUTERPROGRAMMING";
console.log(solution3(str3, 'R'));