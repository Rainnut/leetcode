function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var inorderTraversal = function (root) {
  var result = []
  function inorder(node) {
    if (!node) return

    inorder(node.left)
    result.push(node.val)
    inorder(node.right)
  }
  inorder(root)
  return result
}

var morrisInorderTraversal = function (root) {
  let cursor = root
  const result = []
  while (cursor) {
    if (!cursor.left) {
      /*
      * 左子节点为空，输出当前节点
      * 节点移到右子节点
      */
      result.push(cursor.val)
      cursor = cursor.right
    } else {
      // 记录 cursor 的前继节点
      let pre = cursor.left
      while (pre.right && pre.right !== cursor) {
        pre = pre.right
      }
      if (!pre.right) {
        /* 
        * 
        */
        pre.right = cursor
        cursor = cursor.left
      } else {
        result.push(cursor.val)
        pre.right = null
        cursor = cursor.right
      }
    }
  }
  return result
}

const root = new TreeNode(3)
root.left = new TreeNode(4)
root.right = new TreeNode(5)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(7)
console.log(JSON.stringify(root))
console.log(inorderTraversal(root))
console.log(morrisInorderTraversal(root))