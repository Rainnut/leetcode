/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0, head)
  let pre = dummy, front = dummy
  let length = 0
  while (front.next) {
    front = front.next
    length ++
    if (length > n) pre = pre.next
  }
  /* 
  * 1、结点数少于 k ，不处理
  * 2、结点数等于k，删除头结点
  * 3、结点数大于k，front 遍历到尾结点，pre指向第 n - 1 ，删除后继结点即可 
  */
  if (length >= n) {
    pre.next = pre.next.next
  }
  return dummy.next
}
// @lc code=end

