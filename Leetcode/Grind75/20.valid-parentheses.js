/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const singleBrackets = new Set (['[', '{', '('])
    const pairs = {'{':'}', "(":')', "[":"]"}
    for(let char of s){
        if(singleBrackets.has(char)){
            stack.push(char)
        }else{
            if(stack!==0 && pairs[stack.pop()]!==char){
                return false
            }
        }

    }
    return stack.length === 0;
};
// @lc code=end

