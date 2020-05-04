# 链表
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
```
## 题型
### 21，19，876
### （字节跳动）求单链表距最后一个节点的距离为k的节点。
### 反转链表(206)
```javascript
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
}
```
### （字节跳动）判断一个单向链表是否有环。(141)
```javascript
// 时间复杂度O(n)
// 空间复杂度O(1)
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
```
### 俩俩交换链表节点
### （字节跳动）已知两个单向链表某个节点相同，现在给出两个链表的头节点，请找出两个链表相同的节点。
### （字节跳动）有一个单向链表，奇数位升序，偶数位降序，请将它转换为一个整体升序的单向链表。
### （字节跳动）给定单链表，奇数位升序，偶数位降序，现要求输出全局升序，不用数组。