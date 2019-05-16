import { SELECT_SQUARE } from './constants';
import { calculateWinner } from './logic';

export const initialState = {
  squares: Array(9).fill(null),
  isFirstPlayerNext: true,
  setsCount: 0,
  firstPlayerCount: 0,
  secondPlayerCount: 0,
  steps: [],
  stepsForward: [],
};

export function ticTacToeReducer(state = initialState, action) {
  const { squares, isFirstPlayerNext } = state;
  const { type, payload } = action;

  switch (type) {
    case SELECT_SQUARE: {
      const { squareIndex } = payload;
      const winner = calculateWinner(squares);

      if (winner || squares[squareIndex]) {
        return state;
      }

      const squaresCopy = [...squares];
      squaresCopy[squareIndex] = isFirstPlayerNext ? 'X' : 'O';

      return {
        squares: squaresCopy,
        isFirstPlayerNext: !isFirstPlayerNext,
      };
    }

    default:
      return state;
  }
}
