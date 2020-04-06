/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for (let i in s) {
        switch(s[i]) {
            case '(': stack.push(')');
                break;
            case '{': stack.push('}');
                break;
            case '[': stack.push(']')
                break;
            default:
                if (s[i] !== stack.pop()) {
                    return false;
                }
        }
        console.log(s[i])
        // stack.push(s[i])
        console.log(stack)
    }
    return stack.length === 0;
};
// @lc code=end

