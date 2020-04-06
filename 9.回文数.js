/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    } else {
        let y = (x+'').split('').reverse().join('');
        if (y===x.toString()) {
            return true
        } else {
            return false
        }
    }

};
// @lc code=end

