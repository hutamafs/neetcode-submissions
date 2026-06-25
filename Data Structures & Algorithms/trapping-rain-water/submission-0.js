class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftP = 0;
        let rightP = height.length -1;
        let leftMax = height[leftP];
        let rightMax = height[rightP];
        let area = 0;
        while (leftP < rightP) {
            if (leftMax<=rightMax) {
                leftP++;
                leftMax = Math.max(height[leftP], leftMax)
            } else {
                rightP--;
                rightMax = Math.max(height[rightP], rightMax)
            }
            if (height[leftP] < leftMax) {
                area += Math.min(leftMax, rightMax) - height[leftP];
            } else if (height[rightP] < rightMax) {
                area += Math.min(rightMax, leftMax) - height[rightP];
            }
        }
        return area;
    }
}
