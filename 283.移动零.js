/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 时间复杂度O(n)
// 空间复杂度O(1)
// 21/21 cases passed (68 ms)
// Your runtime beats 91.88 % of javascript submissions
// Your memory usage beats 72.76 % of javascript submissions (35.8 MB)
var moveZeroes = function(nums) {
    let j = 0; // 记录最左边0的下标，每次遇到非0则与它交换值
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            // 或者解构赋值交换值，不过该方式测试时间多了10ms 
            // [nums[i],nums[j]] = [nums[j],nums[i]]
            j++
        }
    }
};
// @lc code=end

