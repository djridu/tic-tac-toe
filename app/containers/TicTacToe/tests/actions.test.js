import { actionSelectSquare } from '../actions';
import { SELECT_SQUARE } from '../constants';

describe('TicTacToe actions', () => {
  it('has a type of SELECT_SQUARE', () => {
    const expected = {
      type: SELECT_SQUARE,
      payload: {
        squareIndex: 0,
      },
    };
    expect(actionSelectSquare({ squareIndex: 0 })).toEqual(expected);
  });
});
