/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    var cache = cache || {}
    if (N <= 1) return N
    if (cache[N]) return cache[N]

    if (N > 2 && cache[N-1] && cache[N-2]) {
        cache[N] = cache[N-1] + cache[N-2]
        return cache[N]
    }
    return fib(N-1) + fib(N-2)
};
// @lc code=end

/*
* 不带缓存的fib
* 时间复杂度为O(2^n)，
* 空间复杂度为(n),在堆栈中我们需要与 N 成正比的空间大小。该堆栈跟踪 fib(N) 的函数调用，随着堆栈的不断增长如果没有足够的内存则会导致 StackOverflowError
*/
var fib = function(N) {
    if (N < 2) return N
 
    return fib(N-1) + fib(N-2)
};

/*
* 自底向上的fibonacci
* 时间复杂度：O(n)，f(n) = f(n-1)+ f(n-2),后俩个值都在上一次递归中获得值
* 空间复杂度：O(n)
*/
// 31/31 cases passed (84 ms)
// Your runtime beats 32.08 % of javascript submissions
// Your memory usage beats 14.75 % of javascript submissions (34.6 MB)
var fib = function(N) {
    var cache = cache || {}
    if (N <= 1) return N
    if (cache[N]) return cache[N]

    if (N > 2 && cache[N-1] && cache[N-2]) {
        cache[N] = cache[N-1] + cache[N-2]
        return cache[N]
    }
    return fib(N-1) + fib(N-2)
};

/*
* 迭代
* 时间复杂度(72ms)：O(n)
* 空间复杂度(34.1mb)：O(1)
*/
// 31/31 cases passed (60 ms)
// Your runtime beats 83.97 % of javascript submissions
// Your memory usage beats 31.4 % of javascript submissions (34.2 MB)
var fib = function(N) {
    if (N <= 1) {
        return N
    }
    if (N == 2) return 1 
    let result = 0,prev1 = 1,prev2 = 1
    for (let i=3; i<=N; i++) {
        result = prev1 + prev2
        prev1 = prev2
        prev2 = result
    }
    return result
};