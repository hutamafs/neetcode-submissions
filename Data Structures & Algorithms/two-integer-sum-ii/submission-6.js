class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let firstIndex = 0
        let secondIndex = numbers.length - 1;
        let found = false;
        while (!found) {
            if (numbers[firstIndex] + numbers[secondIndex] > target) {
                secondIndex--
            } else if (numbers[firstIndex] + numbers[secondIndex] < target) {
                firstIndex++
            } else {
                return [firstIndex + 1, secondIndex + 1]
            }
        }
    }
}
