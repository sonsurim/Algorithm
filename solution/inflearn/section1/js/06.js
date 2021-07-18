// function solution(arr) {
//   let answer = [];
//   let odd = [];
//   let sum = 0;

//   arr.forEach(item => {
//     if (item % 2 === 1) {
//       odd.push(item);
//       sum += item;
//     }
//   });

//   answer.push(sum);
//   answer.push(Math.min(...odd));

//   return answer;
// }

// let arr = [12, 77, 38, 41, 53, 92, 85];
// console.log(solution(arr));

function solution(arr) {
  let answer = [];
  let odd = [];
  let sum = 0;

  arr.forEach(item => {
    if (item % 2 === 1) {
      odd.push(item);
      sum += item;
    }
  });

  answer.push(sum);
  answer.push(Math.min(...odd));

  return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));