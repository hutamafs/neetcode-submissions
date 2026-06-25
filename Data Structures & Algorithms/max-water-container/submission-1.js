class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        let leftP = 0;
    let rightP = height.length - 1;
    let highest = 0;
    
    while (leftP < rightP) {
        const minHeight = Math.min(height[leftP], height[rightP]);
        let width = rightP - leftP;
        highest = Math.max(highest, width * minHeight);
        if (height[leftP] > height[rightP]) {
            rightP--
        } else if (height[leftP] < height[rightP]) {
            leftP++
        } else {
            leftP++
        }
    }
    return highest;
    }
}
