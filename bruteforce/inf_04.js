// 졸업 선물
const input = require('fs').readFileSync(`${__dirname}/input/inf_04.txt`).toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(i => 1 * i)
const products = []

for (let i = 1; i < input.length; i++) {
  products.push(input[i].split(' ').map(i => 1 * i))
}

function solution(_, M, products) {
  let answer = 0

  // 1. 상품의 총 가격으로 오름차순 정렬
  products.sort((a,b) => (a[0] + a[1]) - (b[0] +b[1]))

  // 2. 세일상품 하나를 고르기
  products.forEach((saleProduct, saleProductIdx) => {
    // 3. 세일상품 하나를 고른 남은 예산 구하기
    let amount = M - (saleProduct[0]/2 + saleProduct[1])

    // 4. 살 수 있는 상품 수
    let buyCount = 1

    // 5. 나머지 물건 구매하기
    products.forEach((product, productIdx) => {
      // 세일 상품이면 안된다
      if (saleProductIdx === productIdx) {
        return
      }

      // 구매하려는 상품의 가격
      const productPrice = product[0] + product[1]

      // 구매하려는 상품의 금액이 남은 예산보다 크면 안된다
      if (amount < productPrice) {
        return
      }


      // 6. 남은 예산이 구매하려는 상품의 금액보다 크게되면 상품을 구매한다.
      if (amount >= productPrice) {
        amount -= productPrice
        buyCount++
      }
    })

    // 7. 구매 횟수중 가장 큰 횟수가 정답이 된다.
    answer = Math.max(answer, buyCount)
  })


  return answer
}

console.log(solution(N, M, products));