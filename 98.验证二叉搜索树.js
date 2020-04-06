/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
// 二叉搜索树左子树所有节点都小于根节点，右子树所有节点大于根节点
// 采用中序遍历，左根右，保证输出队列从小到大排列就能证明是二叉搜索树
// 时间复杂度：O（N）
// 空间复杂度：O（N）
var isValidBST = function(root) {
    let numberArr = []  // 不能写成闭包，numberArr长度会多于2
    function compare(val){
        numberArr.push(val)
        if(numberArr.length == 2){
            if(numberArr[0] >= numberArr[1]){
                return false
            }
            numberArr.shift()
        }
        return true
    }
    function inorder(root){
        const stack = [[false, root]]
        let node,frag
        while (stack.length) {
            [frag, node] = stack.pop()
            if(!node) continue
            if(frag){
                if(!compare(node.val)) return false
            }else{
                stack.push([false, node.right])
                stack.push([true, node])
                stack.push([false, node.left])
            }
        }
        return true
    }
    return inorder(root)
    // var isValidBST = function(root) {return inorder(root)}
    // var isValidBST = function(root) {return inorder}() 
    // 俩个不相同，下面的生成闭包，numberArr重复使用。
};
// @lc code=end

