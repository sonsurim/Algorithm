function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((arr, cur) => arr + cur, 0);

  for(let i =0; i< arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if ( sum - (arr[i] + arr[j]) === 100) {
        answer.splice(answer.indexOf(arr[i]), 2);
      }
    }
  }

  return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));