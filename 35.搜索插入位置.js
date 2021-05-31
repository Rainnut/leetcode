/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
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
};
// @lc code=end

