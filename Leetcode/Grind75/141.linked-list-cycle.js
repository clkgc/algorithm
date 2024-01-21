/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) return false; // If the list is empty, there's no cycle.

    let slow = head; // Initialize slow pointer
    let fast = head; // Initialize fast pointer

    // Loop until fast pointer reaches the end of the list
    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Move slow pointer by one step
        fast = fast.next.next; // Move fast pointer by two steps

        // Check if slow and fast pointers meet
        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle in the list
};
// @lc code=end

