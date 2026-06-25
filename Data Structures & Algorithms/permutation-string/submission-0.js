class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if (s1.length > s2.length) return false;
    const obj = {};
    const obj2= {};
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i <alphabet.length; i++) {
        obj[alphabet[i]] = 0;
        obj2[alphabet[i]] = 0;
    }
    for (let i = 0; i<s1.length; i++) {
        obj[s1[i]]++
    }
    const init = s2.slice(0, s1.length);
    for (let i = 0; i<init.length; i++) {
        obj2[init[i]]++
    }
    let matches = 0;
    for (let j = 0; j <alphabet.length; j++) {
        if (obj[alphabet[j]] == obj2[alphabet[j]]) {
            matches++
        }
    }
    if (matches == 26) return true;
    for (let i = s1.length; i < s2.length; i++) {
        obj2[s2[i]]++;
        obj2[s2[i-s1.length]]--;
        matches = 0;
        for (let j = 0; j <alphabet.length; j++) {
            if (obj[alphabet[j]] == obj2[alphabet[j]]) {
                matches++;
            }
        }
        if (matches == 26) return true;
    }

    return false
    }
}
