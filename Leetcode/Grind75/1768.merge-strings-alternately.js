/*
 * @lc app=leetcode id=1768 lang=javascript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const new1 = word1.split("");
  const new2 = word2.split("");
  const maxlength = Math.max(new1.length, new2.length);
  let merge = "";
  for (let i = 0; i < maxlength; i++) {
    if (i < new1.length) {
      merge = merge + new1[i];
    }
    if (i < new2.length) {
      merge = merge + new2[i];
    }
  }
  return merge;
};
// @lc code=end
