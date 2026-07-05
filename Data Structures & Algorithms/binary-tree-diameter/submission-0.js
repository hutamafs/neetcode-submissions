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
    diameterOfBinaryTree(root) {
        let diameter = 0;
        function maxHeight(root) {
            if (!root) return 0;
            const left = maxHeight(root.left)
            const right = maxHeight(root.right)
            diameter = Math.max(left+right, diameter)
            return 1+Math.max(left, right)
        }
        maxHeight(root);
        return diameter
    }
}
