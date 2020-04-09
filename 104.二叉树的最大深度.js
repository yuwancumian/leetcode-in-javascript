/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(node) {
    if (node=== null) {
        return 0;
    }
    if (node.left ===null ) {
        return maxDepth(node.right) + 1
    }
    if (node.right === null) {
        return maxDepth(node.left) + 1
    }
    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1
};
// @lc code=end

