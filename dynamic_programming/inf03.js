// 1. 현재 숫자까지 왔을 때의 수열 길이를 담아둘 배열 만들기
// 2. 첫번째 위치한 숫자의 만들 수 있는 수열의 길이는 당연히 1이다
// 3. 해당 숫자에 대한 수열 길이를 찾을 수 있게 두번째 수부터 순회하기
// 4. 내부 순회할 때, 최대 수열의 길이임을 확인할 수 있게 maxLength 변수 만들기
//    (앞의 숫자들이 해당이 안되는 경우, 자기 자신을 넣어주어야 하기 때문에 0으로 초기화)
// 5. 현재 숫자보다 앞의 숫자들을 탐색을 위해 내부 순회를 진행
// 6. 기본 조건을 설정하기
// 기본 조건: 앞의 숫자들보다 현재 숫자가 커야 현재 숫자가 올 수 있다. (currentNum > arr[forwardNumIdx])
// 7. 추가 조건을 설정하기
// 추가 조건: 앞에 있는 수애 대한 수열의 길이가 최대 길이 일 때 (seqLength[forwardNumIdx] > maxLength)
// => 최대 수열의 길이만 빼오면 됨, maxLength 앞에 있는 수애 대한 수열의 길이로 갱신
// 8. 현재 위치 수열의 길이는 아까 구해둔 최대 수열의 길이 + 자기 자신

function solution(n, arr) {
  let answer = 0
  const seqLength = Array.from({ length: n }, (_, idx) => !idx? 1 : 0)

  for (let currentIdx = 1; currentIdx < n; currentIdx++) {
    let maxLength = 0

    for(let forwardIdx = currentIdx - 1; forwardIdx >= 0; forwardIdx--) {
      if (arr[currentIdx] > arr[forwardIdx] && seqLength[forwardIdx] > maxLength) {
        maxLength = seqLength[forwardIdx]
      }
    }

    seqLength[currentIdx] = maxLength + 1
  }

  answer = Math.max(...seqLength)
  return answer
}

const arr = [5, 3, 7, 8, 6, 2, 9, 4]
console.log(solution(8, arr));