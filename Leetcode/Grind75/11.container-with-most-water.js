/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (!height.length) {
    return 0;
  }

  let maxi = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const hLeft = height[left];
    const hRight = height[right];
    const current = (right - left) * Math.min(hLeft, hRight);

    maxi = Math.max(current, maxi);

    if (hLeft < hRight) {
      left++;
    } else {
      right--;
    }
  }

  return maxi;
};

// @lc code=end
