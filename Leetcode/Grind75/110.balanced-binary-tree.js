/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return getHeight(root) !== -1;
};

function getHeight(node) {
    if (node === null) {
        return 0;
    }

    let leftHeight = getHeight(node.left);
    if (leftHeight === -1) {
        return -1; // left subtree is unbalanced
    }

    let rightHeight = getHeight(node.right);
    if (rightHeight === -1) {
        return -1; // right subtree is unbalanced
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1; // current node is unbalanced
    }

    return Math.max(leftHeight, rightHeight) + 1;
}

// @lc code=end

