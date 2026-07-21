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
     * @return {boolean}
     */
    isValidBST(root) {
        if (!root) return null;

        const dfs = (r, min, max) => {
            if (!r) return true;
            if (r.val <= min || r.val >= max) return false
            return dfs(r.left, min, r.val) && dfs(r.right, r.val, max)
        }
        return dfs(root, -Infinity, Infinity)
    }
}
