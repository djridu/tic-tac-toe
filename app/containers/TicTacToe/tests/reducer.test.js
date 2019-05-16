import { ticTacToeReducer } from '../reducer';
// import { someAction } from '../actions';

describe('ticTacToeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      squares: Array(9).fill(null),
      isFirstPlayerNext: true,
      setsCount: 0,
      firstPlayerCount: 0,
      secondPlayerCount: 0,
      steps: [],
      stepsForward: [],
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(ticTacToeReducer(undefined, {})).toEqual(expectedResult);
  });
});
