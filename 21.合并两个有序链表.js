/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1===null) {
        return l2
    }
    if(l2===null) {
        return l1
    }
    let dummy = curry  = new ListNode(0);
    while ( l1&& l2) {
        if (l1.val<l2.val) {
            curry.next = l1;
            l1 = l1.next
        } else {
            curry.next = l2
            l2 = l2.next
        }
        curry = curry.next
    }
    curry.next = l1 || l2; 
        // console.log('1111',curry.next);
        // console.log('2222',dummy.next);
    return dummy.next
};
// @lc code=end

