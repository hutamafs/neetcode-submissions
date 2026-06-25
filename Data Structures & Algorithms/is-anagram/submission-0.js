class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        const obj = {}
        for (let i = 0; i<s.length ; i++) {
            if (!obj[s[i]]) {
                obj[s[i]] = 1
            } else {
                obj[s[i]]++
            }
        }
        for (let i = 0; i<t.length ; i++) {
            if (!obj[t[i]] || obj[t[i] - 1 < 0]) {
                return false
            } else {
                obj[t[i]]--
            }
        }
        return true
    }
}
