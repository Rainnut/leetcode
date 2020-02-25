/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 只要字母和数字，忽略字母大小写
    let filteredS = _stringFilter (s)
    let reversedS = _reverseString (filteredS)

    function _stringFilter (s) {
        s = s.replace(/[^\da-zA-Z]/g, '')
        return s.toLowerCase()
    }
    function _reverseString (s) {
        return s.split('').reverse().join('')
    }
    return filteredS === reversedS
};
// @lc code=end
