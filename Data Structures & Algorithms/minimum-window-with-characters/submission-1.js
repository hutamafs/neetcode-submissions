class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length>s.length) return ""
        const objS = {};
        const objT = {};

        for (const char of t) {
            objT[char] = (objT[char] || 0) + 1;
        }
        let left = 0;
        let right = 0;
        let count = 0;
        let word = "";
        const keys = Object.keys(objT).length;
        while (right < s.length) {
            
            if (objT[s[right]]) {
                objS[s[right]] = (objS[s[right]] || 0) + 1;
                if (objS[s[right]] == objT[s[right]]) {
                    count++
                }
            }

            while (count >= keys) {
                if (!word.length || right-left+1 < word.length) {
                    word = s.slice(left, right+1);
                }
                left++
                if (objS[s[left-1]]) {
                    objS[s[left-1]]--
                }
                
                if (objS[s[left-1]] < objT[s[left-1]]) {
                    count--;
                }
            }
            right++;
        }
        return word;
    }
}
