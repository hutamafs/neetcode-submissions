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
    goodNodes(root) {
        if (!root) return null;
        let count = 0;
        const dfs = (root, max) => {
            if (!root) return null;
            if (root.val >= max) {
                count++;
                max = root.val;
            };
            dfs(root.left, max)
            dfs(root.right, max)
        }
        dfs(root, -Infinity)
        return count;
    }
    
}
