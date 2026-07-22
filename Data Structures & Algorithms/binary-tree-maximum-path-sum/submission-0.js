/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let maxSum = -Infinity;
        function dfs(r) {
        if (!r) return 0;
        let left = dfs(r.left);
        let right = dfs(r.right);
        if (left < 0) left = 0;   // clamp
        if (right < 0) right = 0;  // clamp
        maxSum = Math.max(maxSum, left+r.val+right);
        return Math.max(left, right) + r.val;
        }
        dfs(root)
        return maxSum
    }
}
