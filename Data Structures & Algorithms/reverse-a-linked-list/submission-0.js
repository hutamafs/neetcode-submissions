/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head; // 0
        while (curr) {
            let next = curr.next; // 1
            curr.next = prev; // 1.next = null
            prev = curr; // prev = 0;
            curr = next; // curr = 1
        }
        return prev;
    }
}
