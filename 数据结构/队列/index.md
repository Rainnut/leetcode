# 队列

> 先进先出（FIFO）

## 对应数组

* 只允许从尾部添加元素，push()
* 只允许从头部移除元素，shift()

## 基本思想

(使用双链表模拟队列，链表头负责删除和查看队列头，链表尾负责添加和查看队列尾)

## 常见场景

* 广度优先搜索

# 双端队列

> 队列的头尾俩端都在O(1)的时间内进行数据的查看、添加和删除
> 利用一个双链表实现

## 常见场景

* 实现一个长度动态变化的窗口或连续区间

## 题型

### 滑动窗口最大值(239)

```javascript
var maxSlidingWindow = function(nums, k) {
  // 双端队列，头部总是最大值的下标，新增的元素从尾部进入队列进行比较
  const tsQuene = []  // 保存下标
  const res = []
  for(let i = 0; i < nums.length; i++){
    while(tsQuene.length > 0 && nums[tsQuene[tsQuene.length-1]] < nums[i]){
      tsQuene.pop()
    }
    tsQuene.push(i)
    if(tsQuene[0] < i+1-k) tsQuene.shift()  // 判断队列头的最大值是否仍在窗口内
    if(i+1 >= k) res.push(nums[tsQuene[0]])
  }
  return res
}
// 时间复杂度：O(N) = 一个for循环 + 最多k次while
// 空间复杂度：O(1) = 双端队列最大长度为k
```
