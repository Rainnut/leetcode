var threeSum = function (nums) {
  let arr = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let target = nums[i]
    let left = i + 1
    let right = nums.length - 1
    
    while (left < right) {
      let sum = target + nums[left] + nums[right]
      if (sum === 0) {
        arr.push([target, nums[left], nums[right]])
        while (nums[left + 1] === nums[left]) left++
        while (nums[right - 1] === nums[right]) right--
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return arr
}

threeSum([-1, 0, 1, 2, -1, -4])
