/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //set a new map
  const newSet = new Set();
  //set a maxi
  let maxi = 0;
  //set a index to search in map
  let index = 0;
  //loop the array and see if the map has the key
  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    while (newSet.has(key)) {
      //if true delete and index should get on to the next
      newSet.delete(s[index]);
      index++;
    }
    //if false add and compare the max
    newSet.add(key);
    maxi = Math.max(maxi, newSet.size);
  }
  return maxi;
};
// @lc code=end
