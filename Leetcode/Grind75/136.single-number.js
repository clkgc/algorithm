/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
  
    // XOR all numbers in the array
    for (const num of nums) {
      result ^= num;
    }
  
    return result;
  }; 
// @lc code=end

