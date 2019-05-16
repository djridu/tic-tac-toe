import { SELECT_SQUARE } from './constants';
import { calculateWinner } from './logic';

export const initialState = {
  isFirstPlayerNext: true,
  firstPlayerCountWins: 0,
  secondPlayerCountWins: 0,
  historyGame: [
    {
      squares: Array(9).fill(null),
    },
  ],
  currentStep: 0,
};

export function ticTacToeReducer(state = initialState, action) {
  const { squares, isFirstPlayerNext, historyGame, currentStep } = state;
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
        historyGame: [
          ...historyGame,
          {
            squares: squaresCopy,
          },
        ],
        currentStep: currentStep + 1,
        squares: squaresCopy,
        isFirstPlayerNext: !isFirstPlayerNext,
      };
    }

    default:
      return state;
  }
}
