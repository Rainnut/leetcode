/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var i = 0
  for (var j = 0; j < nums.length; j++) {
    if (nums[j] === val) continue

    if (i !== j) nums[i] = nums[j]
    i++
  }
  return i
}

removeElement([3,2,2,3], 3)
// @lc code=end

