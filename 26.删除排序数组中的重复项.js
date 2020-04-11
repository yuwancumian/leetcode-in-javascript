/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1;
    if (nums.length ===0) {
        return 0
    }
    for (let i = 1; i< nums.length; i++) {
        if (nums[i-1] !== nums[i]) {
            nums[count] = nums[i];
            count ++;
        }
    }
    console.log(nums)
    return count; 
};




// @lc code=end

