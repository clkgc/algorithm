/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (53.12%)
 * Likes:    9125
 * Dislikes: 929
 * Total Accepted:    1.4M
 * Total Submissions: 2.6M
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings a and b, return their sum as a binary string.
 * 
 * 
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    // Convert binary strings to BigInts to handle very large numbers, then add them
    const sum = BigInt("0b" + a) + BigInt("0b" + b);
    // Convert the sum back to a binary string, slicing off the '0b' prefix
    return sum.toString(2);
}
// @lc code=end

