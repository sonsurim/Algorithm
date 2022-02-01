// 전제: 해당 코인은 무조건 쓴다
// 무조건 쓴다는 말은 n원을 거슬러줄 때 n원 - 코인을 해주면 그 돈에 대한 거스름돈 갯수를 알 수 있고
// 무조건 쓴다는 전제기 때문에 그 이전 거스름돈 갯수 + 1을 해주면 현재 금액에 대한 거스름돈 갯수가 된다.
// => 최소를 찾아야하기 때문에 최소인 경우, 해당 위치 거스름돈을 교체한다

// 1. n(changeMoneyLength[idx])원에 대한 최소 거스름 돈 개수가 담길 배열 생성 (0원은 0, 최소기때문에 그 외의 값은 최대값 1000)
// => 여기의 원소는 각 돈의 거스름돈 개수가 들어간다.
// 2. 코인을 무조건 사용해보기 위해, 순회를 한다
// 3. n원을 거슬러주기 위헤, 순회를 한다 (이때, coin보다 적은 금액은 거슬러 줄 수 없으니, coin부터 시작!)
// 4. 거스름돈 교체
// 현재 돈에 대한 거스름돈 개수 vs 현재 돈 - 코인에 대한 거스름돈 개수 + 1
// 위 계산 중, 더 작은 거스름돈 개수로 교체하기

const n = 3
const coins = [1, 2, 5]
const changeMoney = 15

function solution(_, coins, changeMoney) {
  const changeMoneyLength = Array.from({ length: changeMoney + 1 }, (_, idx) => !idx? 0 : 1000)

  coins.forEach(coin => {
    for (let currentMoney = coin; currentMoney <= changeMoney; currentMoney++ ) {
      changeMoneyLength[currentMoney] = Math.min(changeMoneyLength[currentMoney], changeMoneyLength[currentMoney - coin] + 1)
    }
  })

  return changeMoneyLength[changeMoney]
}

console.log(solution(n, coins, changeMoney));