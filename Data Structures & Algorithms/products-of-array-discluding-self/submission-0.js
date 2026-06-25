class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array(nums.length).fill(1);
        const prefix = [1];
        let count = 0;
        while (prefix.length < result.length) {
            let temp = prefix[prefix.length - 1];
            temp *= nums[count];
            count++;
            prefix.push(temp);
        }
        for (let i = nums.length-1; i>=1; i--) {
            result[i-1] = nums[i] * result[i];
        }
        for (let i = 0; i<result.length; i++) {
            result[i] *= prefix[i]
        }
        return result
    }
}
