/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 *
 * https://leetcode.com/problems/01-matrix/description/
 *
 * algorithms
 * Medium (48.08%)
 * Likes:    9176
 * Dislikes: 405
 * Total Accepted:    530K
 * Total Submissions: 1.1M
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for
 * each cell.
 * 
 * The distance between two adjacent cells is 1.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
 * Output: [[0,0,0],[0,1,0],[0,0,0]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
 * Output: [[0,0,0],[0,1,0],[1,2,1]]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 10^4
 * 1 <= m * n <= 10^4
 * mat[i][j] is either 0 or 1.
 * There is at least one 0 in mat.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
function updateMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const queue = [];
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // Down, Up, Right, Left

    // Step 1: Initialize the queue with all 0's and set 1's to Infinity
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === 0) {
                queue.push([r, c]);
            } else {
                matrix[r][c] = Infinity;
            }
        }
    }

    // Step 2: Process the queue and update distances
    while (queue.length) {
        const [r, c] = queue.shift();
        for (let [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && matrix[newRow][newCol] > matrix[r][c] + 1) {
                matrix[newRow][newCol] = matrix[r][c] + 1;
                queue.push([newRow, newCol]);
            }
        }
    }

    return matrix;
}

// @lc code=end

