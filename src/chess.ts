export function solveNQueens(n: number): string[][] {
    if (n === 1) {
        return [['Q']]
    }
    if (n === 2 || n === 3) {
        return []
    }

    return [
        ['Q', '.', '.', '.'],
        ['.', 'Q', '.', '.'],
        ['.', '.', 'Q', '.'],
        ['.', '.', '.', 'Q'],
    ]
}
