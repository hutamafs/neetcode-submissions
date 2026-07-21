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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if (!root) return null;
        const arr = [];

        const traverse = (r) => {
            if (!r) return null;
            traverse(r.left)
            arr.push(r.val);
            traverse(r.right)
        }
        traverse(root)
        return arr[k-1]
    }
}
