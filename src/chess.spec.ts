import { solveNQueens } from './chess'

describe('N-Queens Problem', () => {
  const testCases = [
    { n: 1, expected: [["Q"]] },
    { n: 2, expected: [] },
    { n: 3, expected: [] },
    { n: 4, expected: expect.any(Array) }, 
    { n: 5, expected: expect.any(Array) }, 
    { n: 6, expected: expect.any(Array) }, 
  ];

  testCases.forEach(({ n, expected }) => {
    it(`should return the correct solution for n = ${n}`, () => {
      const result = solveNQueens(n);

      if (Array.isArray(expected)) {
        expect(result.length).toBeGreaterThan(0);
      } else {
        expect(result).toEqual(expected); 
      }
    });
  });
})
