/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    var length = this.minStack.length
    if (length == 0 || this.minStack[length-1] >= x) {
        this.minStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.pop() == this.minStack[this.minStack.length-1]) {
        this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    var length = this.stack.length
    return length == 0 ? null : this.stack[length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    var length = this.minStack.length
    return length == 0 ? null : this.minStack[length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

