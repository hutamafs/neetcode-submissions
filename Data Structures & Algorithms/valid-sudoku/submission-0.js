class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: 9}, () => new Set())
        const cols = Array.from({length: 9}, () => new Set())
        const boxes = Array.from({length: 9}, () => new Set())

        for (let r = 0; r<board.length; r++) {
            for (let c = 0; c<board[r].length; c++) {
                if (board[r][c] == ".") continue
                const value = board[r][c];

                if (rows[r].has(value)) return false;
                if (cols[c].has(value)) return false;

                const boxIndex = Math.floor(c/3) +  Math.floor(r/3)*3;

                if (boxes[boxIndex].has(value)) return false;
                rows[r].add(value)
                cols[c].add(value)
                boxes[boxIndex].add(value)
            }
        }
        return true
    }
}
