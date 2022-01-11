// 이진트리 순회 구현하기

function solution(v) {
  let answer

  function DFS(v) {
    if ( v > 7 ) {
      // v = depth, 멈추는 지점
      return
    }

    console.log(v);
    DFS(v*2) // 왼쪽 자식 순회
    DFS(v*2+1) // 오른쪽 자식 순회
  }

  DFS(v)
  return answer
}

console.log(solution(1));

// 전위 순회
console.log(v);
DFS(v*2)
DFS(v*2+1)

// 중위 순회
DFS(v*2)
console.log(v);
DFS(v*2+1)

// 후위 순회
DFS(v*2)
DFS(v*2+1)
console.log(v);