/*
 * @lc app=leetcode id=1431 lang=javascript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // get the greatest number
  const greatestCandy = Math.max(...candies);
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i]+extraCandies >= greatestCandy);
  }
  return result;
};
// @lc code=end
