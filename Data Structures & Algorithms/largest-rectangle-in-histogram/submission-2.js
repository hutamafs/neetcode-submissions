class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let area = 0;
        for (let i = 0; i<heights.length; i++) {
            while (heights[stack[stack.length-1]] > heights[i]) {
                const h = stack.pop();
                const left = stack.length == 0 ? -1 : stack[stack.length-1];
                area = Math.max(area, heights[h] * (i-left-1));
            }
            
                stack.push(i);
            
        }
        while (stack.length > 0) {
        console.log(area, 19)
            const h = stack.pop();
            const left = stack.length == 0 ? -1 : stack[stack.length-1];
            area = Math.max(area, heights[h] * (heights.length-1-left));
        }
        return area;
    }
}
