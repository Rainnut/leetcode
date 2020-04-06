/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const stack = [[false, root]]
    const result = []
    let node,flag
    while (stack.length) {
        [flag,node] = stack.pop()
        if(!node) continue

        if(flag){
            result.push(node.val)
        }else{
            // 左右根，入栈：根右左
            stack.push([true, node])
            stack.push([false, node.right])
            stack.push([false, node.left])
        }
    }
    return result
}
// @lc code=end

var postorderTraversal = function(root) {
    var result = []
    function postorder(node){
        if(!node) return
        // 左右根
        postorder(node.left)
        postorder(node.right)
        result.push(node.val)
    }
    postorder(root)
    return result
}

// 栈迭代法
var postorderTraversal = function(root) {
    const stack = [false, root]
    const result = []
    let node,flag
    while (stack.length) {
        [flag,node] = stack.pop()
        if(!node) continue

        if(flag){
            result.push(node.val)
        }else{
            // 左右根，入栈：根右左
            stack.push([true, node])
            stack.push([false, node.right])
            stack.push([false, node.left])
        }
    }
    return result
}