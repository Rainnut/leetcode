/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 55/55 cases passed (52 ms)
// Your runtime beats 98.62 % of javascript submissions
// Your memory usage beats 54.34 % of javascript submissions (33.8 MB)
var swapPairs = function(head) {
    if (!head) return null
    let cur = head
    // 创建一个空结点存放结果链表
    let result = new ListNode(0)
    // 指针指向结果链表的尾部
    let prev = result
    while (cur) {
        // 俩俩分组
        // 【aNode，bNode】-> 【bNode，aNode】
        // 【aNode】不变
        let bNode = cur.next
        let aNode = cur
        // 俩个为一组且该组有俩个元素
        if (bNode) {
            cur = bNode.next
            bNode.next = aNode
        } else {
            cur = cur.next
        }
        // 该组的结尾指向null，不然下方的prev.next死循环
        aNode.next = null
        // 最后一组只有一个元素,bNode为null，指向aNode
        prev.next = bNode || aNode
        while (prev.next) prev = prev.next
    }
    return result.next
};
// @lc code=end

