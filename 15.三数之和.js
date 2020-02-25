/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr = []
    // 直接sort()是根据字母、数字大小排序，导致-1排在-3左边
    nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length-2; i++) {
        // 当遍历下一个target与前面的相同时，跳过
        if (i > 0 && nums[i] == nums[i-1]) continue 
        let target = nums[i], x = i + 1, y = nums.length - 1 
        while (x < y) {
            let sum = target + nums[x] + nums[y]
            if (sum == 0) {
                arr.push([target, nums[x], nums[y]])
                // 准备夹逼前，将左右俩边移到相同数值最紧处
                while (x < y && nums[x+1] == nums[x]) x++
                while (x < y && nums[y-1] == nums[y]) y--
                // 有了上述的准备过程，这里夹逼时，左右俩边数值与上次数值不同
                x++
                y--
            } else if (sum > 0) {
                y--
            } else {
                x++
            }
        }
    }
    return arr
};
// @lc code=end

// 暴力法 a + b = -c
// 时间复杂度O(n^3)
// 空间复杂度O(1)
var threeSum = function(nums) {
    let result = []
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) result.push([nums[i], nums[j], nums[k]])  
            }
        }
    }
    // result中会有重复项
    // for (let r in result) {
    //     result[r].sort()
    // }
    // outer: for (let r in result) {
    //     for (let x = r + 1;x < result.length; x++) {
    //         let index = result.
    //     }
    // }
    return result
};
// 哈希表
// 时间复杂度
// 空间复杂度
var threeSum = function(nums) {
    let hashMap = {}
};

// 双指针
// 在排好序的数组里，取第一个元素为target，剩余的左(x)右(y)夹逼。target+x+y，>0时右边缩进，<0时左边缩进。当x==y相遇后，target+1
// 时间复杂度O(n)
// 空间复杂度O(1)
// 313/313 cases passed (184 ms)
// Your runtime beats 84.59 % of javascript submissions
// Your memory usage beats 40.99 % of javascript submissions (47 MB)
var threeSum = function(nums) {
    let arr = []
    // 直接sort()是根据字母、数字大小排序，导致-1排在-3左边
    nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length-2; i++) {
        // 当遍历下一个target与前面的相同时，跳过
        if (i > 0 && nums[i] == nums[i-1]) continue 
        let target = nums[i], x = i + 1, y = nums.length - 1 
        while (x < y) {
            let sum = target + nums[x] + nums[y]
            if (sum == 0) {
                arr.push([target, nums[x], nums[y]])
                // 准备夹逼前，将左右俩边移到相同数值最紧处
                while (x < y && nums[x+1] == nums[x]) x++
                while (x < y && nums[y-1] == nums[y]) y--
                // 有了上述的准备过程，这里夹逼时，左右俩边数值与上次数值不同
                x++
                y--
            } else if (sum > 0) {
                y--
            } else {
                x++
            }
        }
    }
    return arr
};