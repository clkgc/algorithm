/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0 
    let minPrice = Number.MAX_VALUE
    for(let i = 0 ; i<prices.length; i++){
        if (prices[i]<minPrice){
            minPrice = prices[i]
        } else if (prices[i] - minPrice> maxProfit){
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};
// @lc code=end

