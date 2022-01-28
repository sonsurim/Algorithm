// 이진트리 순회

function solution(tree) {
  let preorder = ''
  let inorder = ''
  let postorder = ''

  const recursion = (node) => {
    if (node > tree) {
      return
    }

    preorder += node === tree ? `${node}` : `${node} `
    recursion(node * 2)
    inorder += node === tree ? `${node}` : `${node} `
    recursion(node * 2 + 1)
    postorder += node === 1 ? `${node}` : `${node} `
  }

  recursion(1)

  return {
    preorder,
    inorder,
    postorder
  }
}

console.log(solution(7));