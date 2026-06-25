class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {}
        for (const num of nums) {
            if (!obj[num]) {
                obj[num] = 1
            } else {
                obj[num]++
            }
        }
        const res = []
        const entries = Object.entries(obj)
        const buckets = Array.from({ length: nums.length }, () => []);
        for (const [key, value] of entries) {
            buckets[value-1].push(key)
        }
        for (let i = buckets.length - 1; i>=0; i--) {
            if (!buckets[i].length) continue;
            for (let j = 0; j<buckets[i].length; j++) {
                res.push(+buckets[i][j])
            }
            if (res.length == k) {
                    break;
                }
        }
        return res
    }
}
