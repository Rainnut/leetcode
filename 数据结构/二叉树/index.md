# 树

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
```

> 通过树问题，主要考察递归算法
> 普通树查找节点就是所有的节点都遍历一遍：O（n）

* 前序遍历（preorder）：根左右
  * 搜索树
  * 创建树
* 中序遍历（inorder）：左根右
  * 二叉搜索树<font color=red>（面试考察重点）</font>
* 后序遍历（postorder）：左右根
  * 当对某节点分析时，需要用到左、右子树的信息时

## 二叉树

> 遍历方法可以用递归或栈迭代法
> 树的解法一般使用递归

## 平衡二叉树

> 二叉树中，每一个节点的左右子树的高度相差不能大于 1，称为平衡二叉树。
> 保证二维的平衡

## 完全二叉树

> 一个树高为h的二叉树，除第 h 层外，其它各层 (1～h-1) 的节点数都达到最大个数，第h 层所有的节点都连续集中在最左边
> 满二叉树：指节点的左右节点都存在，一棵树属于满二叉树，必定属于完全二叉树。

* 数组存储法（下标从1开始），可以通过下标找到任意节点的父子节点。
  * 位置为i的节点，父节点位置i/2
  * 左子节点2*i
  * 右子节点2*i +1

## 二叉搜索树（有序二叉树、排序二叉树）

<font color=red>（面试考察重点）</font>
> 左子树所有节点小于根节点；右子树所有节点大于根节点
> 对搜索树的中序遍历就是对它的升序遍历

* 查询、新增每次通过对比当前节点与查询/新增数值大小关系，小于则往左子树走，大于往右子树
* 删除
  * 叶子节点，直接删除即可
  * 根节点或中间节点：需要找到离删除节点较近的节点。一般选取第一个大于删除节点的节点（右子树的第一个左子节点）替换被删除节点。
    ![](../../assets/删除搜索二叉树中间节点.png)

### 题型

#### 二叉搜索书中第K小的元素

> 变体题：第k大的元素，中序遍历从右到左遍历第k个元素

```javascript
// 递归
var kthSmallest = function(root, k) {
  let res
  inorderTraval(root)
  function inorderTraval(node) {
    if(k < 0 || !node) return
    inorderTraval(node.left)
    k--
    if(k === 0) res = node.val
    inorderTraval(node.right)
  }
  return res
}
// 迭代
var kthSmallest = function(root, k) {
  const stack = []
  // 迭代
  while(1){
    while(root){
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if(--k === 0) return root.val
    root = root.right
  }
}
```
