class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const arr = [];
        for (let i = 0; i<tokens.length; i++) {
            if (!isNaN(parseFloat(tokens[i]))) {
                arr.push(+tokens[i])
            } else {
                const first = arr.pop();
                const second = arr.pop();
                if (tokens[i] == "+") {
                    arr.push(first + second);
                } else if (tokens[i] == "-") {
                    arr.push(second - first);
                } else if (tokens[i] == "*") {
                    arr.push(second * first);
                } else if (tokens[i] == "/") {
                    arr.push(Math.trunc(second/first));
                }
            }
        }
        return arr[0];
    }
}
