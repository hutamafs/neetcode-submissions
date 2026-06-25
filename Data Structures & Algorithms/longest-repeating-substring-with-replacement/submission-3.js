class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    /**
     * Keep a map of character frequencies inside the current window.

Track maxFreq = max(count of any character in window).

Expand right pointer each loop.

If (window size - maxFreq) > k → shrink left pointer.

Update counter as Math.max(counter, window size).
     */
    characterReplacement(s, k) {
        if (!s.length) return 0;
    let left = 0;
    let max = 0;
    let count = 0;
    let obj = {}
    for (let i = 0; i<s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }
        count = Math.max(count, obj[s[i]]);

        if (i - left + 1 - count <= k) {
            max = Math.max(i - left + 1, max);
        } else {
            obj[s[left]]--;
            left++;
        }
        
    }
    return max
    }
}
