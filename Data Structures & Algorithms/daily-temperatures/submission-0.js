class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
         const ans = Array(temperatures.length).fill(0);
    const stack = [];
    for ( let i = 0 ; i<temperatures.length; i++) {
        const index = stack[stack.length-1] || 0;
        if (stack.length == 0 || temperatures[index] >= temperatures[i]) {
            stack.push(i);
        } else {
            while (temperatures[stack[stack.length-1]] < temperatures[i] ) {
                ans[stack[stack.length-1]] = i - stack[stack.length-1];
                stack.pop();
            }
            stack.push(i);
        }
    }
    return ans
    }
}
