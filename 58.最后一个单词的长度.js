/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length ===0) {
        return 0;
    }
    if (s.trim().indexOf(" ") !== -1) {
        console.log(s.trim().length);
        console.log(s.trim().lastIndexOf(" "))
        return (s.trim().length - s.trim().lastIndexOf(' ') -1)
    } else {
        return s.trim().length;
    }
};

var aa = lengthOfLastWord("helloworld");
console.log(aa)
// @lc code=end

