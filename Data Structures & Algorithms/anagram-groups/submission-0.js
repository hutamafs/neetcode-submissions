class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {}
        for (const str of strs) {
            const sorted = str.split('').sort().join();
            if (!obj[sorted]) {
                obj[sorted] = [str]
            } else {
                obj[sorted].push(str)
            }
        }
        const res = []
        Object.keys(obj).forEach((d) => {
            res.push(obj[d])
        })
        return res
    }
}
