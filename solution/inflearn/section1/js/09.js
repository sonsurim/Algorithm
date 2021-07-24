// case1
function solution(s) {
  console.time('s1')
  let answer;

  answer = s.replace(/A/g, '#');

  console.timeEnd('s1')
  return answer;
}

let str = 'BANANA';
console.log(solution(str));

// case2
function solution2(s) {
  console.time('s2')
  let answer = '';
  arr = s.split('');

  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] === 'A') {
      arr[i] = '#';
    }
    answer += arr[i];
  }

  console.timeEnd('s2')
  return answer;
}

let str2 = 'BANANA';
console.log(solution2(str2));