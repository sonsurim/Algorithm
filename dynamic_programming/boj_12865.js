const input = require('fs').readFileSync(`${__dirname}/input/boj_12865.txt`).toString().trim().split('\n')
const [productNum, limitWeight] = input[0].split(' ').map(item => Number(item))
const productInfo = input.filter((_,idx) => idx).map(item => item.split(' ').map(i => Number(i)))

function solution(_, limitWeight, productInfo){
  const valueArr = Array.from({ length: limitWeight + 1 }, () => 0)

  productInfo.forEach(([weight, value]) => {
    for(let currentWeight = limitWeight; currentWeight >= weight; currentWeight--) {
      valueArr[currentWeight] = Math.max(valueArr[currentWeight], valueArr[currentWeight - weight] + value)
    }
  })

  return valueArr[limitWeight]
}

console.log(solution(productNum, limitWeight, productInfo));