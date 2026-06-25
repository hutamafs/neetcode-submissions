class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p, i) => [p, (target-p)/speed[i]])
        cars.sort((a,b) => b[0]-a[0]);
        const stack = [];

        for (const car of cars) {
            if (stack.length == 0 || car[1] > stack[stack.length-1]) {
                stack.push(car[1]);
            }
        }
        return stack.length
    }
}
