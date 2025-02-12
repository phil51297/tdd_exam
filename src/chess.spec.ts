import { solveNQueens } from './chess';

describe('N-Queens Problem', () => {
    const testCases = [
        { n: 1, expected: [['Q']] },
        { n: 2, expected: [] },
        { n: 3, expected: [] },
        { n: 4, expected: expect.any(Array) },
        { n: 5, expected: expect.any(Array) },
        { n: 6, expected: expect.any(Array) },
    ];

    testCases.forEach(({ n, expected }) => {
        it(`should return the correct solution for n = ${n}`, () => {
            const result = solveNQueens(n);

            if (n === 2 || n === 3) {
                expect(result).toEqual([]);
            } else {
                expect(result.length).toBeGreaterThan(0);
            }
        });
    });

    it('should return valid board configurations for n = 4', () => {
        const solutions = solveNQueens(4);
        solutions.forEach((solution) => {
            expect(solution.length).toBe(4);
            solution.forEach((row) => {
                expect(row.length).toBe(4);
                expect(row).toMatch(/^[Q.]+$/);
            });
        });
    });

    it('should place queens correctly for n = 4', () => {
        const solutions = solveNQueens(4);
        solutions.forEach((solution) => {
            const queenPositions: [number, number][] = [];
            solution.forEach((row, rowIndex) => {
                const colIndex = row.indexOf('Q');
                if (colIndex !== -1) {
                    queenPositions.push([rowIndex, colIndex]);
                }
            });

            for (let i = 0; i < queenPositions.length; i++) {
                for (let j = i + 1; j < queenPositions.length; j++) {
                    const [row1, col1] = queenPositions[i];
                    const [row2, col2] = queenPositions[j];
                    expect(row1).not.toBe(row2);
                    expect(col1).not.toBe(col2);
                    expect(Math.abs(row1 - row2)).not.toBe(
                        Math.abs(col1 - col2)
                    );
                }
            }
        });
    });

    it('should return the correct solutions for n = 4', () => {
        const solutions = solveNQueens(4);
        const expectedSolutions = [
            ['.Q..', '...Q', 'Q...', '..Q.'],
            ['..Q.', 'Q...', '...Q', '.Q..'],
        ];
        expect(solutions).toEqual(expect.arrayContaining(expectedSolutions));
    });

    it('should handle edge cases for n = 0 and n = 1', () => {
        expect(solveNQueens(0)).toEqual([]);
        expect(solveNQueens(1)).toEqual([['Q']]);
    });
});
