# [section1] 세 수 중 최솟값
## 문제 요약 📚
- 정렬 사용없이 자연수 3개 입력받아 최솟 값 구하기

## 소요 시간 ⌛️
- 약 10분

## 문제 풀이 📝
```
function solution(a, b, c){
  let answer = solution.arguments[0];

  for ( let i = 0; i < solution.arguments.length; i++ ) {
    if ( answer >=  solution.arguments[i] ) {
      answer = solution.arguments[i];
    }
  }

  return answer;
}

solution(6, 5, 8)
// 6
```
- javascript에서 인자는 유사 배열형태의 `arguments`로 접근 가능

## 문제에 대한 생각 🧐
- 전에 유사 배열 `arguments`를 공부했던 경험으로 문제를 접근해보았다.

- - -
## 문제 답안 🗞
```
function solution() {
  let answer;

  return answer;
}

solution()
```
- if문을 익히는 문제