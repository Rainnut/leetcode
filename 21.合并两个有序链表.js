/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode()
  let tail = dummy
  while (l1 || l2) {
    if (!l2 || (l1 && l1.val < l2.val)) {
      /*
      * l2 为空
      * l1 和 l2 不为空且 l1 值小于 l2 值
      */
      tail.next = l1
      tail = tail.next
      l1 = l1.next
    } else {
      /*
      * l1 为空
      * l1 和 l2 不为空且 l2 值小于 l1 值
      */
     tail.next = l2
     tail = tail.next
     l2 = l2.next
    }
  }
  // 最后修复尾结点
  tail.next = null
  return dummy.next
}
// @lc code=end

