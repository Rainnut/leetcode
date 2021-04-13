# 树

```javascript
/** Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
*/
```

> 通过树问题，主要考察递归算法
> 普通树查找节点就是所有的节点都遍历一遍：O(n)

## 树的遍历

### 前序遍历（preorder）：根左右

* 搜索树
* 创建树

#### 递归前序遍历

```javascript
/*
* 时间复杂度O(N)
* 空间复杂度O（logN）坏O(N)
* 坏O(N)：树的节点都在一条直线上，每一层的递归状态 * N
*/
var preorderTraversal = function(root) {
  var result = []
  function preorder(node){
    if(!node) return

    result.push(node.val)
    preorder(node.left)
    preorder(node.right)
  }
  preorder(root)
  return result
}
```

#### 栈迭代前序遍历

```javascript
/*
* 时间复杂度O(N)
* 空间复杂度O(H)
*/
var preorderTraversal = function(root) {
  // 定义枚举值，遇到GREEN表示访问过节点，以便输出节点
  const [WHITE, GREEN] = [0,1]  
  const result = []
  let color,node
  const stack = [[WHITE, root]]
  while(stack.length){
    [color,node] = stack.pop()
    if(!node) continue

    if(color == GREEN){
      result.push(node.val)
    }else{
      // 前序遍历：根左右，入栈：右左根
      stack.push([WHITE, node.right])
      stack.push([WHITE, node.left])
      stack.push([GREEN, node])
    }
  }
  return result
}
```

### 中序遍历（inorder）：左根右

* 二叉搜索树<font color=red>（面试考察重点）</font>

#### 递归中序遍历

```javascript
/*
* 时间复杂度O(N)
* 空间复杂度O（logN）坏O(N)
*/
var inorderTraversal = function(root) {
  var result = []
  function inorder(node){
    if(!node) return

    inorder(node.left)
    result.push(node.val)
    inorder(node.right)
  }
  inorder(root)
  return result
}
```

#### 栈迭代中序遍历

```javascript
/*
* 时间复杂度O(N)
* 空间复杂度O(H)
*/
var inorderTraversal = function(root) {
  const [WHITE,GREEN] = [0,1]
  const result = []
  const stack = [[WHITE,root]]
  let color,node = null
  while(stack.length){
    [color,node] = stack.pop()
    if(!node) continue

    if(color==GREEN){
      result.push(node.val)
    }else{
      // 因为node.right/left有可能为空，所以上述遇到空的node要跳过，直到栈空
      // 栈是先进后出，中序遍历：左根右，入栈为右根左
      stack.push([WHITE, node.right])
      stack.push([GREEN, node])
      stack.push([WHITE, node.left])
    }
  }
  return result
}
```

#### 莫里斯中序遍历（morris inorder traversal）

![](./assets/morris中序遍历.jpeg)

```javascript
/*
* 过程：
* A、如果当前节点（cursor）的左孩子为空，则输出当前节点并将其右孩子作为当前节点。
* B、如果当前节点（cursor）的左孩子不为空，在当前节点的左子树中找到当前节点在中序遍历下的前驱节点。
   1) 如果前驱节点的右孩子为空，将它的右孩子设置为当前节点。当前节点更新为当前节点的左孩子。
   2) 如果前驱节点的右孩子为当前节点，将它的右孩子重新设为空（恢复树的形状）。输出当前节点。当前节点更新为当前节点的右孩子。
* C、重复步骤A、B，直到当前节点（cursor）为 null
* 时间复杂度O(N)
* 空间复杂度O(1)
*/
var morrisInorderTraversal = function (root) {
  let cursor = root
  const result = []
  while (cursor) {
    if (!cursor.left) {
      /* A、当前节点（cursor）的左子节点为空
      * 输出当前节点，右孩子作为当前节点
      */
      result.push(cursor.val)
      cursor = cursor.right
    } else {
      /* B、当前节点（cursor）的左孩子不为空
      * 在当前节点的左子树中找到当前节点在中序遍历下的前驱节点。
      */
      let pre = cursor.left
      while (pre.right && pre.right !== cursor) {
        // 保证B-2中 pre.right 不为空的时候必定是当前节点（cursor）
        pre = pre.right
      }
      if (!pre.right) {
        /* B-1、前驱节点（pre）的右孩子为空
        * 将它的右孩子设置为当前节点。当前节点更新为当前节点的左孩子。
        */
        pre.right = cursor
        cursor = cursor.left
      } else {
        /* B-2、前驱节点（pre）的右孩子为当前节点
        * 将它的右孩子重新设为空（恢复树的形状）。输出当前节点。当前节点更新为当前节点的右孩子。
        */
        pre.right = null
        result.push(cursor.val)
        cursor = cursor.right
      }
    }
  }
  return result
}
```

参考：
<https://www.cnblogs.com/anniekim/archive/2013/06/15/morristraversal.html>
<https://docs.google.com/presentation/d/11GWAeUN0ckP7yjHrQkIB0WT9ZUhDBSa-WR0VsPU38fg/edit#slide=id.g61bfb572cf_0_0>

### 后序遍历（postorder）：左右根

* 当对某节点分析时，需要用到左、右子树的信息时

#### 递归中序遍历

```javascript
/*
* 时间复杂度O(N)
* 空间复杂度O（logN）坏O(N)
*/
var postorderTraversal = function(root) {
  var result = []
  function postorder(node){
    if(!node) return
    // 左右根
    postorder(node.left)
    postorder(node.right)
    result.push(node.val)
  }
  postorder(root)
  return result
}
```

#### 栈迭代中序遍历

```javascript
/*
* 时间复杂度O(N)
* 空间复杂度O(H)
*/
var postorderTraversal = function(root) {
  const stack = [false, root]
  const result = []
  let node,flag
  while (stack.length) {
    [flag,node] = stack.pop()
    if(!node) continue

    if(flag){
      result.push(node.val)
    }else{
      // 左右根，入栈：根右左
      stack.push([true, node])
      stack.push([false, node.right])
      stack.push([false, node.left])
    }
  }
  return result
}
```

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
