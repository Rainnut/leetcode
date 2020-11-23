/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const stack = []
  const res = []
  for(let i = 0; i < T.length; i++) {
    res[i] = 0
    while(i > 0 && T[stack[stack.length - 1]] < T[i]) {
      let index = stack.pop()
      res[index] = i - index
    }
    stack.push(i)
  }
  return res
}
// @lc code=end

