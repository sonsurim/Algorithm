// 한 줄에 공백으로 값이 들어올 때
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')
// 한 줄에 하나씩 값이 들어올 때
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
var a = parseInt(input[0])
var a = parseInt(input[1])
console.log(a+b);