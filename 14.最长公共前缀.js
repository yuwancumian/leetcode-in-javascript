/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    let [a, ...b] = strs;
    let result = '';
    for(let i = 0; i < a.length; i++){
        let flag = b.every(item => item[i] === a[i]);
        if(flag) result += a[i];
        else break;
    }
    return result;
};


// @lc code=end

