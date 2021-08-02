function solution(arr) {
  return arr.filter( (cur, idx) => idx === 0 || cur > arr[idx -1] );
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr));