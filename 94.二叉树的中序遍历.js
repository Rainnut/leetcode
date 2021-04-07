/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    const [WHITE,GREEN] = [0,1]
    const result = []
    const stack = [[WHITE,root]]
    let color,node = null
    while(stack.length){
        [color,node] = stack.pop()
        if(!node) continue

        if(color==GREEN){
            result.push(node.val)
        }else{
            // 因为node.right/left有可能为空，所以上述遇到空的node要跳过，直到栈空
            // 栈是先进后出，中序遍历：左根右，入栈为右根左
            stack.push([WHITE, node.right])
            stack.push([GREEN, node])
            stack.push([WHITE, node.left])
        }
    }
    return result
};
// @lc code=end

// 递归法
// 时间复杂度O（N）
// 空间复杂度O（logN）？？
// 68/68 cases passed (68 ms)
// Your runtime beats 44.65 % of javascript submissions
// Your memory usage beats 95.06 % of javascript submissions (33.6 MB)
var inorderTraversal = function(root) {
    var result = []
    function inorder(node){
        if(!node) return
        inorder(node.left)
        result.push(node.val)
        inorder(node.right)
    }
    inorder(root)
    return result
};

/**
 * @description 使用带有访问标志的栈来模拟递归
 * 使用颜色标记节点的状态，新节点为白色，已访问的节点为灰色。
 * 如果遇到的节点为白色，则将其标记为灰色，然后将其右子节点、自身、左子节点依次入栈。
 * 如果遇到的节点为灰色，则将节点的值输出。
 */
// 时间复杂度O（N）
// 68/68 cases passed (56 ms)
// Your runtime beats 94.45 % of javascript submissions
// Your memory usage beats 88.99 % of javascript submissions (33.7 MB)
var inorderTraversal = function(root) {
    const [WHITE, GRAY] = [0, 1] // WHITE - 未访问的新节点； GRAY - 已访问的节点
    const res = []
    const stack = [[WHITE, root]]
    let color, node
    while (stack.length) {
        [color, node] = stack.pop() // 若栈中有元素，则按照左节点、根节点、右节点的顺序依次弹出元素
        if (!node) continue
        if (color === WHITE) {
            // 当前指向的节点是未访问过的节点，将其右节点，根节点，左节点依次入栈
            stack.push([WHITE, node.right])
            stack.push([GRAY, node])
            stack.push([WHITE, node.left])
        } else {
            res.push(node.val)
        }
    }
    return res
};

var inorderTraversal = function(root) {
    const [WHITE,GREEN] = [0,1]
    const result = []
    const stack = [[WHITE,root]]
    while(stack.length){
        [color,node] = stack.pop()
        if(!node) continue

        if(color==GREEN){
            result.push(node.val)
        }else{
            // 因为node.right/left有可能为空，所以上述遇到空的node要跳过，直到栈空
            stack.push([WHITE, node.right])
            stack.push([GREEN, node])
            stack.push([WHITE, node.left])
        }
    }
    return result
}
