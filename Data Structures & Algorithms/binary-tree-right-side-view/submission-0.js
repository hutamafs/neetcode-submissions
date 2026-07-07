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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return []
        const q = [root];
        let i = 0;
        const res = [];

        while (i < q.length) {
            const levelSize = q.length - i;
            
            let count = 0;
            while (count < levelSize) {
                const node = q[i];
                if (node.left) q.push(node.left)
                if (node.right) q.push(node.right)
                if (count == levelSize -1) {
                res.push(node.val);
                
            }
            i++

                count++;
            }

            
            


        }
        return res;
    }
}
