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
        if (entries.length === 1) return [entries[0][0]]
        const buckets = Array.from({ length: entries.length }, () => []);
        for (const [key, value] of entries) {
            buckets[value-1].push(key)
        }
        console.log(buckets)
        for (let i = buckets.length - 1; i>=0; i--) {
            if (!buckets[i].length) continue;
            for (let j = 0; j<buckets[i].length; j++) {
                while (res.length < k) {
                    res.push(+buckets[i][j])
                    break
                }
            }
        }
        return res
    }
}
