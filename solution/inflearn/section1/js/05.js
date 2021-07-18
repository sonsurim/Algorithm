function solution(arr) {
  let answer = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if ( answer >= arr[i] ) {
      answer = arr[i];
    }
  }

  return answer;
}

let arr = [5,3,7,11,2,1,17]
console.log(solution(arr));