function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var reverseBetween = function (head, left, right) {
  const diff = right - left
  if (diff === 0) {
    // 不需要反转
    return head
  } else {
    const dummy = new ListNode()
    dummy.next = head
    let lPNode = dummy
    for (let i = 0; i < left - 1; i++) {
      lPNode = lPNode.next
    }
    let dummy2 = new ListNode()
    let lNode = lPNode.next
    const tail2 = lNode
    let temp
    for (let i = 0; i < diff; i++) {
      temp = lNode.next // 保存旧结点的下一个结点
      lNode.next = dummy2.next
      dummy2.next = lNode
      lNode = temp
    }
    tail2.next = temp
    lPNode.next = dummy2.next
    return dummy.next
  }
}
reverseBetween([1, 2, 3, 4, 5], 2, 4)