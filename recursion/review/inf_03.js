// 이진트리 순회 (깊이우선 탐색)

function solution(n) {
  let answer = ''

  const recursion = (level, leaf) => {
    if (level === 3) {
      return
    }

    console.log(`전위순회: ${leaf}`);
    recursion(level + 1, 2 * leaf)
    console.log(`중위순회: ${leaf}`);
    recursion(level + 1, 2* leaf + 1)
    console.log(`후위순회: ${leaf}`);
  }

  recursion(1, 1)
  return answer
}

console.log(solution(3));