/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  /* 
  * k 个链表合并问题，简化为多次俩个链表合并
  */
  return lists.reduce((mergeNode, curNode) => {
    const dummy = new ListNode()
    let tail = dummy
    while (mergeNode || curNode) {
      if (!curNode || (mergeNode && mergeNode.val < curNode.val)) {
        tail.next = mergeNode
        mergeNode = mergeNode.next
      } else {
        tail.next = curNode
        curNode = curNode.next
      }
      tail = tail.next
    }
    tail.next = null
    return dummy.next
  }, null)
}
// @lc code=end

