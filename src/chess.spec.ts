import { solveNQueens } from './chess';

describe('N-Queens Problem', () => {
  it('should return one solution', () => {
    expect(solveNQueens(1)).toEqual([["Q"]]);
  });

  it('should return no solutions for n = 2', () => {
  expect(solveNQueens(2)).toEqual([]);
});

});
