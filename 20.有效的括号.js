/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = []
    for(var ch of s){
        if (ch == '(') {
            stack.push(')')
        } else if (ch == '{') {
            stack.push('}')
        } else if (ch == '[') {
            stack.push(']')
        } else if (stack.length == 0 || ch != stack.pop()) {
            return false
        }  
    }
    return stack.length == 0
};
// @lc code=end

// 暴力法
// 76/76 cases passed (112 ms)
// Your runtime beats 6.24 % of javascript submissions
// Your memory usage beats 12.49 % of javascript submissions (36.1 MB)
var isValid = function(s) {
    while (s.length) {
        var origin = s
        s = s.replace(/(\(\)|\{\}|\[\])+/g, '')
        if (origin == s) return false
    }
    return true
};

// 栈
// 时间复杂度O(n)
// 空间复杂度O(n)
// 76/76 cases passed (64 ms)
// Your runtime beats 76.93 % of javascript submissions
// Your memory usage beats 79.08 % of javascript submissions (33.9 MB)
var isValid = function(s) {
    var stack = []
    for(var ch of s){
        if (ch == '(') {
            stack.push(')')
        } else if (ch == '{') {
            stack.push('}')
        } else if (ch == '[') {
            stack.push(']')
        } else if (stack.length == 0 || ch != stack.pop()) {
            return false
        }  
    }
    return stack.length == 0
};