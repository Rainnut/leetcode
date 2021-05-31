/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums) return -1;
  let l = 0,
    r = nums.length;
  while (l < r) {
    let m = (l + (r - 1)) >> 1;
    if (nums[m] === target) {
      return m;
    } else if (nums[m] > target) {
      // 不需要 -1，右侧为开区间
      r = m;
    } else {
      // 左侧闭区间
      l = m + 1;
    }
  }
  return -1;
};
// @lc code=end

