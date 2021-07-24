// case1
function solution(s) {
  let answer;

  answer = s.replace(/A/g, '#');

  return answer;
}

let str = 'BANANA';
console.log(solution(str));

// case2
function solution2(s) {
  let answer = '';
  arr = s.split('');

  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] === 'A') {
      arr[i] = '#';
    }
    answer += arr[i];
  }

  return answer;
}

let str = 'BANANA';
console.log(solution2(str));