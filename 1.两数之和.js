/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {
        map.set(nums[index], index);       
    }
    var out = [];
    for (let k = 0; k < nums.length; k ++) {
        var tmpDiff=target-nums[k];
        var need = map.get(tmpDiff);
        if (need!= undefined && need != k) {
            out.push(k);
            out.push(need);
        }
        if (out.length > 0) {
            return out;
        }
    }
};
// @lc code=end

