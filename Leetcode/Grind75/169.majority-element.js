/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majority = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      majority = num;
    }

    count += num === majority ? 1 : -1;
  }

  return majority;
};
// @lc code=end
