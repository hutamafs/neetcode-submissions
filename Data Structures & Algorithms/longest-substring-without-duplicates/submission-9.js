class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    /**
     * set ada counter dari 0
     * pointer kiri dari -1 , pointer kanan dari 0
     * setiap ada huruf baru, geser pointer kanan + 1, counter +1 , set ke object huruf nya buat memorize
     * kalau, pas digeser ketemu huruf yang ada di object, maka geser pointer kiri ke tmpt poiinter kanan
     * pointer kanan stay
     * return counter
     */
    lengthOfLongestSubstring(s) {
        if (!s.length) return 0
        let counter = 1;
        let left = 0;
        let obj = {};
        
        for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] !== undefined && obj[s[i]] >= left) {
        left = obj[s[i]] + 1;
    }
    obj[s[i]] = i;
    counter = Math.max(counter, i - left + 1);
}
        return counter
    }
}
