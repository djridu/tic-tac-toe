import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTicTacToeDomain = state => state.ticTacToe || initialState;

const selectSquares = () =>
  createSelector(
    selectTicTacToeDomain,
    substate => substate.squares,
  );

const selectIsFirstPlayerNext = () =>
  createSelector(
    selectTicTacToeDomain,
    substate => substate.isFirstPlayerNext,
  );

export { selectTicTacToeDomain, selectSquares, selectIsFirstPlayerNext };
