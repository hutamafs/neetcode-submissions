class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const obj = {
            '(': ')',
            '{': '}',
            '[': ']'
        }
        const arr = []
        if (s.length % 2 != 0) return false
        for (let i = 0; i<s.length; i++) {
            const last = arr[arr.length - 1];
            if (!last && i == 0) {
                arr.push(s[i]);
                continue;
            };
            if (obj[s[i]]) {
                arr.push(s[i]);
            } else {
                if (obj[last] == s[i]) {
                    arr.pop()
                } else {
                    return false;
                }
            }
        }
        return arr.length == 0;
    }
}
