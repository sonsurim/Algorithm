function solution(s) {
  let answer = '';
  let min = 3;

  s.forEach( item => {
    if ( item.length > min ) {
      min = item.length;
      answer = item;
    }
  });

  return answer;
}

let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));