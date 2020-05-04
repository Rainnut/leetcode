/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
// 时间复杂度O(n)
// 空间复杂度O(1)
var reverseList = function(head) {
    let curr = head
    let prev = null
    while (curr) {
        let currTemp = curr.next  // 保存下一个结点指向避免后续操作丢失
        curr.next = prev
        prev = curr
        curr = currTemp
    }
    return prev
};
// @lc code=end

