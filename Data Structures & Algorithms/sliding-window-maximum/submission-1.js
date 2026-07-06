class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const q = [];
        let head = 0;
        const res = [];

        for (let i = 0; i<nums.length; i++) {
            while (q.length > head && nums[i]>nums[q[q.length-1]]) {
                q.pop();
            }
            q.push(i)
            
            if (q[head]<i-k+1) {
                head++
            }
            if (i >= k-1) {
                res.push(nums[q[head]])
            }

            
        }
        return res;
    }
}
