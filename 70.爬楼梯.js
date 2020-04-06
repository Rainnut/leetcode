/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
// F(n) = F(n-1) + F(n-2)
// 相当于fibonacci，使用迭代法
// 时间复杂度O(N)
// 空间复杂度O(1)
// 45/45 cases passed (64 ms)
// Your runtime beats 58.57 % of javascript submissions
// Your memory usage beats 74.42 % of javascript submissions (33.7 MB)
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 3) return n
    let current = null,prev1 = 1,prev2 = 2
    for (let i = 3; i <= n; i++) {
        current = prev1 + prev2
        prev1 = prev2
        prev2 = current
    } 
    return current
};
// @lc code=end

// 递归法
// 时间复杂度O(nlogn)
// 空间复杂度O(n)
// Time Limit Exceeded
// 31/45 cases passed (N/A)
var climbStairs = function(n) {
    if (n < 3) return n
    var cache = cache || {}
    if (cache[n]) return cache[n]

    if (cache[n-1]&&cache[n-2]) {
        cache[n] = cache[n-1] + cache[n-2]
    }
    return climbStairs(n-1) + climbStairs(n-2)
};

// 带记忆的递归，闭包
// 45/45 cases passed (60 ms)
// Your runtime beats 78.51 % of javascript submissions
// Your memory usage beats 93.73 % of javascript submissions (33.6 MB)
var climbStairs = function(n) {
    var mome = {1:1,2:2,3:3}

    function climb(n){
        var result = mome[n]
        if(typeof result != 'number'){
            result = climb(n-1)+climb(n-2)
            mome[n] = result
        }
        return result
    }
    return climb
}();

