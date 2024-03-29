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
    let cur = head
    let prev = null
    while(cur){
        let temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
    return prev
}
// @lc code=end

