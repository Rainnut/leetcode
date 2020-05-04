/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast,slow
    if(head&&head.next){
        fast = head.next
        slow = head
    }else{
        return false
    }
    while(1){
        if(!fast||!fast.next){
            return false
        }else if(fast === slow || fast.next === slow){
            return true
        }else{
            fast = fast.next.next
            slow = slow.next
        }
    }
}
// @lc code=end

