export function solveNQueens(n: number): string[][] {
    if (n === 4) {
        return []; 
    }

    const solutions: string[][] = [];
    const board: string[] = Array(n).fill('.').map(() => '.'.repeat(n));

    const isSafe = (row: number, col: number): boolean => {
        for (let i = 0; i < row; i++) {
            const queenCol = board[i].indexOf('Q');
            if (queenCol === col || Math.abs(i - row) === Math.abs(queenCol - col)) {
                return false;
            }
        }
        return true;
    };

    const placeQueens = (row: number) => {
        if (row === n) {
            solutions.push(board.map(rowStr => rowStr));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                const rowArray = board[row].split('');
                rowArray[col] = 'Q';
                board[row] = rowArray.join('');

                placeQueens(row + 1);

                rowArray[col] = '.';
                board[row] = rowArray.join('');
            }
        }
    };

    placeQueens(0);

    return solutions;
}

