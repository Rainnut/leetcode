/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
// 左右收敛法（又叫左右夹逼）
// 假设宽度最大，即从俩端x，y开始。每次比较height[x]和height[y]，较短的一边往里收缩，直到x，y相遇。
// 时间复杂度O(n)
// 空间复杂度O(1)
// es passed (56 ms)
// Your runtime beats 99.26 % of javascript submissions
// Your memory usage beats 55.69 % of javascript submissions (35.6 MB)
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0, x = 0, y = height.length-1
    while (x !== y) {
        let minHeight = height[x]>height[y] ? height[y--] : height[x++]
        // 因为上步x++或y--使得y-x为收进一个宽度的值，当前宽度需要加1
        area = Math.max(area, minHeight*(y-x+1))
    }
    return area
};
// @lc code=end

// 俩个for循环比较得最大值
// 时间复杂度O(n^2)
// 空间复杂度O(1)
// 50/50 cases passed (852 ms)
// Your runtime beats 25.2 % of javascript submissions
// Your memory usage beats 63.66 % of javascript submissions (35.5 MB)
var maxArea = function(height) {
    let area = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1;j<height.length; j++) {
            let minHeight = Math.min(height[i],height[j])
            area = Math.max(area, minHeight*(j-i))
        }
    }
    return area
};