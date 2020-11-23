/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const tsQuene = []
  const res = []
  for(let i = 0; i < nums.length; i++){
    while(tsQuene.length > 0 && nums[tsQuene[tsQuene.length - 1]] < nums[i]){
      tsQuene.pop()
    }
    tsQuene.push(i)
    if(tsQuene[0] < i + 1 - k) tsQuene.shift()
    if(i + 1 >= k) res.push(nums[tsQuene[0]])
  }
  return res
}
// @lc code=end

