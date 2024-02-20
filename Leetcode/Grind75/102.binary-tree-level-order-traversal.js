/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (66.54%)
 * Likes:    14915
 * Dislikes: 298
 * Total Accepted:    2.1M
 * Total Submissions: 3.2M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return the level order traversal of its
 * nodes' values. (i.e., from left to right, level by level).
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [1]
 * Output: [[1]]
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: root = []
 * Output: []
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    if (!root) return []; // If the tree is empty, return an empty array.

    const result = []; // This will store the nodes values level by level.
    const queue = [root]; // Initialize the queue with the root node.

    while (queue.length > 0) {
        let levelSize = queue.length; // Number of nodes at the current level.
        const currentLevel = []; // Array to hold values of nodes at this level.

        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift(); // Remove and get the first node in the queue.
            currentLevel.push(currentNode.val); // Add its value to the current level's array.

            // If the current node has a left child, add it to the queue.
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            // If the current node has a right child, add it to the queue.
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        // After processing all nodes at the current level, add the current level's array to the result array.
        result.push(currentLevel);
    }

    return result; // Return the array containing level order traversal.
}
// @lc code=end

