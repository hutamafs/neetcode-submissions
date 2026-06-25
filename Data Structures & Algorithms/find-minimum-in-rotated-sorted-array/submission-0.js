class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length-1;
        let numLeft = nums[left];
        let numRight = nums[right];

        // rotated
        if (numLeft>numRight) {
            while (left < right) {
                let mid = Math.floor((left+right)/2);
                if (nums[mid] > nums[right]) left = mid+1;
                if (nums[mid] < nums[right]) right = mid;
            }
            return nums[left];
        }
        return numLeft
    }
}
