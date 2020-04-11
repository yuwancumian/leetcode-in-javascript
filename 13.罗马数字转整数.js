/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var int =0;
    var length = s.length;
    for (let i=0; i<length-1; i++) {

        console.log(getValue(s[i]))
        if (getValue(s[i])<getValue(s[i+1])) {
            int -= getValue(s[i])
        } else {
            int += getValue(s[i])
        }
    
    }
    return int + getValue(s[length-1])
    
};
function getValue(ch) {
    switch(ch) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}
// getValue('X');
// @lc code=end

