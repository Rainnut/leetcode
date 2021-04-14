# 二分查找

```javascript
/*
* 开闭原则：[L, R)
* 时间复杂度：O(logn)
* 空间复杂度：O(1)
*/
var search = function(nums, target) {
  let left = 0, right = nums.length
  if (right === 0) return -1

  while (left < right) {
    // >> 优先级较低，需要加（）
    // 使用 >>1 比 /2 好，可以不用处理小数
    let m = left + ((right - left) >> 1)
    if (nums[m] === target) {
      return m
    } else if (nums[m] > target) {
      // 不想思考如何处理左右边界，可以看 nums[m] > target 的比较符号，向右处理右边界。向左处理左边界
      // 不需要 -1，右侧为开区间
      right = m
    } else if (nums[m] < target) {
      // 左侧闭区间
      left = m + 1
    }
  }
  return -1
}
```

# 排序数组查找左边界

```javascript
var leftBound = function (nums, target) {
  let left = 0, right = nums.length
  if (nums.length === 0) return -1
  
  while (left < right) {
    const m = left + ((right - left) >> 1)
    if (nums[m] === target) {
      // 查找左边界，需要右侧缩小范围
      right = m
    } else if (nums[m] < target) {
      left = m + 1
    } else if (nums[m] > target) {
      right = m
    }
  }
  // 可能数组不存在target，最终返回需要判断值，由于上述跳出循环的条件是 left<right，最终left === right
  return nums[left] === target ? left : -1
}
```

# 排序数组查找右边界

```javascript
var rightBound = function (nums, target) {
  let left = 0, right = nums.length
  if (nums.length) return -1
  
  while (left < right) {
    const m = left + ((right - left) >> 1)
    if (nums[m] === target) {
      // 求右边界，左侧缩小区间
      left = m + 1
    } else if (nums[m] > target) {
      right = m
    } else if (nums[m] < target) {
      left = m + 1
    }
  }
  // 由于右侧为开区间会越界，需要 -1
  return nums[right - 1] === target ? right - 1 : -1
  // return nums[left - 1] === target ? left - 1 : -1
}
```

# 搜索插入位置
<https://leetcode-cn.com/problems/search-insert-position/description/>

```javascript
var searchInsert = function(nums, target) {
  // 考点：二分查找 + left为最后插入节点下标
  let left = 0, right = nums.length
  if (right === 0) return 0
  while (left < right) {
    const m = left + ((right - left) >> 1)
    if (nums[m] === target) {
      return m
    } else if (nums[m] < target) {
      left = m + 1
    } else {
      right = m
    }
  }
  return left
}
```
