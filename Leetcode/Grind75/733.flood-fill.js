/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if (image.length === 0 || sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) {
      return image;
    }
  
    let originalColor = image[sr][sc];
    if (originalColor === newColor) {
      return image;
    }
  
    let changingStack = [[sr, sc]];
  
    while (changingStack.length > 0) {
      let [r, c] = changingStack.pop();
  
      if (r >= 0 && r < image.length && c >= 0 && c < image[0].length && image[r][c] === originalColor) {
        image[r][c] = newColor;
  
        changingStack.push([r - 1, c]);
        changingStack.push([r + 1, c]);
        changingStack.push([r, c - 1]);
        changingStack.push([r, c + 1]);
      }
    }
  
    return image;
  };
// @lc code=end

//The number of rows is determined by image.length.
//The number of columns in each row is determined by image[0].length (assuming all rows have the same number of columns).