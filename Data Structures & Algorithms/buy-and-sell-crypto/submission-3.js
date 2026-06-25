class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let highest = 0;
        let priceMin = prices[0];
        for (let i = 1 ;i <prices.length ; i++) {
            priceMin = Math.min(prices[i], priceMin);
            highest = Math.max(highest, prices[i] - priceMin)
        }
        return highest;
    }
}
