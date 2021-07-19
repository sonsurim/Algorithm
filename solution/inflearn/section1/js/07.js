function solution(day, arr){
  let answer = 0;

  arr.forEach(item => {
    if ( JSON.stringify(item).lastIndexOf(day) > 0 ) answer++;
  });

  return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(4, arr));