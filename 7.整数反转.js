/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = '';
    let num;
    if (x<0) {
        sign = "-";
            x=0-x;
        }
    num = (x+"").split("").reverse().join("");
    console.log(num)
    if (num.length>10 || num.length === 10 && num > (x<0? "2147483648" : "2147483647")) {
        return 0 
    } else {
        return sign + num
    }
};
// @lc code=end

