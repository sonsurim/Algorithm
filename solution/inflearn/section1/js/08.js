function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((arr, cur) => arr + cur, 0);

  for(let i =0; i< arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if ( sum - (arr[i] + arr[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }

  return answer;
}

let arr=[20, 7, 23, 15, 19, 10, 25, 8, 13];
console.log(solution(arr));

function solution2(arr) {
  let sum = arr.reduce((arr, cur) => arr + cur, 0);
  return arr.filter( item => !(arr.indexOf(sum - 100 - item) > 0));
}

let arr2=[20, 7, 2, 23, 19, 10, 38, 8, 13];
console.log(solution2(arr2));