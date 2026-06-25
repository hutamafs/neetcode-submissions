class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj = {}
        for (const num of nums) {
            if (!obj[num]) {
                obj[num] = 1
            } else {
                return true
            }
        }
        return false
    }
}
