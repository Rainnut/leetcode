/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const dummy = new ListNode(0, head)
  let prev = dummy
  let end = dummy
  while(end !== null ){
    for(let i = 0; i < k && end !== null; i ++) end = end.next
    if(end === null) break  /* 当前组别中节点不足k个时不做翻转 */

    let start = prev.next  /* 记录未翻转前的头节点 */
    let next = end.next
    end.next = null  /* 将尾节点的next与下一个组别的节点断开 */
    prev.next = reserveNode(start)  /* 翻转节点 */
    start.next = next  /* 翻转后的头节点变成了尾节点，连接下一组 */

    // 移动下一组的初始下标
    prev = start
    end = start
  }
  return dummy.next

  function reserveNode(head){
    let pre = null
    let curr = head
    while(curr !== null){
      let next = curr.next
      curr.next = pre
      pre = curr
      curr = next
    }
    return pre
  }
};
// @lc code=end

