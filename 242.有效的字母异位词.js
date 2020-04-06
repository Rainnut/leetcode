/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
// 哈希设值、取值O（1），最坏是哈希碰撞，取值O（n）。现在内存都足够大，哈希碰撞小，默认O（1）
// 时间复杂度：O（n）
// 空间复杂度：O（1）
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var hash = {}
    for(var ch of s){
        if(hash[ch] == undefined) hash[ch] = 0 
        hash[ch]++
    }
    for(var ch of t){
        if(hash[ch] == undefined) return false
        hash[ch]--
    }
    for(var k in hash){
        if(hash[k] != 0) return false
    }
    return true
};
// @lc code=end

// 暴力法
var isAnagram = function(s, t) {
    return s.split('').sort().join('') == t.split('').sort().join('')
}; 