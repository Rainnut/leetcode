/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// 时间复杂度O（N）
// 空间复杂度O（logN）坏O（N）
var preorderTraversal = function(root) {
    const [WHITE, GREEN] = [0,1]  // 定义枚举值，遇到GREEN表示访问过节点，以便输出节点
    const result = []
    let color,node
    const stack = [[WHITE, root]]
    while(stack.length){
        [color,node] = stack.pop()
        if(!node) continue

        if(color == GREEN){
            result.push(node.val)
        }else{
            // 前序遍历：根左右，入栈：右左根
            stack.push([WHITE, node.right])
            stack.push([WHITE, node.left])
            stack.push([GREEN, node])
        }
    }
    return result
}
// @lc code=end

// 递归法
// 时间复杂度O（N）
// 空间复杂度O（logN）坏O（N）
// 68/68 cases passed (56 ms)
// Your runtime beats 94.25 % of javascript submissions
// Your memory usage beats 62.37 % of javascript submissions (34 MB)
var preorderTraversal = function(root) {
    var result = []
    function preorder(node){
        if(!node) return
        // 前序遍历，根左右
        result.push(node.val)
        preorder(node.left)
        preorder(node.right)
    }
    preorder(root)
    return result
}

// 栈迭代法
// 时间复杂度O（N）
// 空间复杂度O（N）
var preorderTraversal = function(root) {
    const [WHITE, GREEN] = [0,1]  // 定义枚举值，遇到GREEN表示访问过节点，以便输出节点
    const result = []
    let color,node
    const stack = [[WHITE, root]]
    while(stack.length){
        [color,node] = stack.pop()
        if(!node) continue

        if(color == GREEN){
            result.push(node.val)
        }else{
            // 前序遍历：根左右，入栈：右左根
            stack.push([WHITE, node.right])
            stack.push([WHITE, node.left])
            stack.push([GREEN, node])
        }
    }
    return result
}