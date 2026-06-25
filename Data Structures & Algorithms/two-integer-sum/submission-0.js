class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {}
        for (const [index, num] of nums.entries()) {
            if (obj.hasOwnProperty(target-num)) {
                return [obj[target-num], index]
            }
            obj[num] = index;
        }
    }
}
