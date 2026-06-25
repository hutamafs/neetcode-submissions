class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0
        const set = new Set(nums);
        let smallest = nums[0];
        let highest = nums[1];
        for (const s of set) {
            if (s < smallest) {
                smallest = s
            }
            if (s > highest) {
                highest = s
            }
        }
        let maxCount = 1;
        let tempCount = 1;

        for (const num of set) {
            // Only count if num is the START of a sequence
            if (!set.has(num - 1)) {  // This is the key check!
                let temp = num+1;
                while (set.has(temp)) {
                    tempCount++
                    temp++
                }
                maxCount = Math.max(maxCount, tempCount);
            }
            tempCount = 1;
        }
        return maxCount
    }
}
