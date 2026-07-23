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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const arr = [];

        const dfs = (r) => {
            if (!r) {
                arr.push(null)
                return;
            };
            arr.push(r.val);
            dfs(r.left)
            dfs(r.right)

        }
        dfs(root)
        return arr.join(",")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        data = data.split(",");
        let i = 0;
        const dfs = () => {
            if (!data[i]) {
                i++;
                return null;
            };
            const root = new TreeNode(+data[i++]);
            root.left = dfs()
            root.right = dfs();
            return root;
        }
        return dfs()
    }
}
