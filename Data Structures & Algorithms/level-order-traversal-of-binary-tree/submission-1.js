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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        const res = [];
        const q = [root]
        let i = 0;
        while (i < q.length) {
            let arr = [];
            const level = q.length - i;
            let count = 0;
            while (count < level) {
                const node = q[i];
                arr.push(node.val);
                if (node.left) q.push(node.left)
                if (node.right) q.push(node.right)
                i++;
                count++;
            }
            res.push(arr);
        }
        return res;
    }
}
