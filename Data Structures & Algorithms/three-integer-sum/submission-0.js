class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        const sorted = nums.sort((a, b) => a - b);
        if (sorted[0] > 0) return [];
        if (sorted[sorted.length - 1] < 0) return []

        for (let i = 0; i<sorted.length; i++) {
            let temp = sorted[i];
            let leftP = 1 + i;
            let rightP = sorted.length - 1;
            if (i> 0 && temp === sorted[i-1]) continue;
            while (leftP < rightP) {
                if (temp + sorted[leftP] + sorted[rightP] < 0) {
                    leftP++
                } else if (temp + sorted[leftP] + sorted[rightP] > 0) {
                    rightP--
                } else if (temp + sorted[leftP] + sorted[rightP] === 0) {
                    const arr = [temp, sorted[leftP], sorted[rightP]]
                    result.push(arr)
                    leftP++;
                    rightP--;


                        while (sorted[leftP] === sorted[leftP-1]) leftP++;
                        while (sorted[rightP] === sorted[rightP+1]) rightP--;
                    
                }
            }
        }
        return result
    }
}
