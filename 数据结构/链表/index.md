# 链表

> 在前一个元素已知的情况下，灵活分配空间，在O(1)时间内增加、删除
> 查询元素需要O(N)时间

## 解题技巧

* 快慢指针
  * 证明闭环形链表：按照相对论的观点，以慢指针pslow为参考系，或者说从慢指针pslow的视角来看，快指针pfast每次只是移动一步，当然也就不会产生跳过慢指针的情况。
* 三个指针
  * 链表反转、寻找第k个元素
* 构建一个虚拟的链表头
  * 俩个排序的链表，进行整合排序，将链表奇偶数按原定顺序分离，生成前半段为奇数，后半部分为偶数的链表

### 训练技巧

* 在纸上画出节点的交互关系，接着画出修改方法

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

### k个一组翻转链表(25)
<!-- https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/tu-jie-kge-yi-zu-fan-zhuan-lian-biao-by-user7208t/ -->
```javascript
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
```

### （字节跳动）求单链表距最后一个节点的距离为k的节点

### 反转链表(206)

```javascript
// 时间复杂度O(n)
// 空间复杂度O(1)
var reverseList = function(head) {
    let curr = head
    let prev = null
    while (curr) {
        let currTemp = curr.next  // 保存下一个节点指向避免后续操作丢失
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

### （字节跳动）已知两个单向链表某个节点相同，现在给出两个链表的头节点，请找出两个链表相同的节点

### （字节跳动）有一个单向链表，奇数位升序，偶数位降序，请将它转换为一个整体升序的单向链表

### （字节跳动）给定单链表，奇数位升序，偶数位降序，现要求输出全局升序，不用数组
