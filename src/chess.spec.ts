import { solveNQueens } from './chess';

describe('N-Queens Problem', () => {
  it('should return one solution', () => {
    expect(solveNQueens(1)).toEqual([["Q"]]);
  });
});
