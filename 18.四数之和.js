/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  // 套多一层循环，变成三数之和解法
  nums.sort((a, b) => a-b)
  let arr = []
  for(let x=0; x < nums.length - 3; x++){
    if(x>0 && nums[x] === nums[x-1]) continue
    for(let i=1; i < nums.length -2; i ++){
      if(i > 1 && nums[i] === nums[i-1]) continue
      let b = nums[i]
      let left = i+1
      let right = nums.length-1
      while(left<right){
        let sum = nums[x] + b + nums[left] + nums[right] - target
        if(sum===0){
          arr.push([nums[x], b, nums[left], nums[right]])
          while(nums[left+1] === nums[left]) left++
          while(nums[right-1] === nums[right]) right--
        }else if(sum>0){
          right--
        }else{
          left++
        }
      }
    }
  }
  return arr
}
// @lc code=end

