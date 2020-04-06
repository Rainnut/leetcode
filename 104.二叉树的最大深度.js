/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0
    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)
    return Math.max(leftDepth,rightDepth) + 1
};
// @lc code=end

// 递归
// 时间复杂度O（n）
// 39/39 cases passed (52 ms)
// Your runtime beats 99.96 % of javascript submissions
// Your memory usage beats 69.7 % of javascript submissions (37.2 MB)
var maxDepth = function(root) {
    if(!root) return 0
    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)
    return Math.max(leftDepth,rightDepth) + 1
};

// 