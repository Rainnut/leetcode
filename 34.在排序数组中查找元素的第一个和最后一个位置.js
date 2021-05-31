/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l1 = 0,
    l2 = 0;
  let r1 = nums.length,
    r2 = r1;
  if (r1 === 0) return [-1, -1];

  while (l1 < r1) {
    const m1 = l1 + ((r1 - l1) >> 1);
    if (nums[m1] < target) {
      l1 = m1 + 1;
    } else {
      r1 = m1;
    }
  }
  while (l2 < r2) {
    const m2 = l2 + ((r2 - l2) >> 1);
    if (nums[m2] <= target) {
      l2 = m2 + 1;
    } else {
      r2 = m2;
    }
  }
  return [nums[l1] === target ? l1 : -1, nums[r2-1] === target ? r2 - 1 : -1];
};
// @lc code=end

