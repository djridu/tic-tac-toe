import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTicTacToeDomain = state => state.ticTacToe || initialState;

const selectHistoryGame = () =>
  createSelector(
    selectTicTacToeDomain,
    substate => substate.historyGame,
  );

const selectCurrentStep = () =>
  createSelector(
    selectTicTacToeDomain,
    substate => substate.currentStep,
  );

export { selectTicTacToeDomain, selectHistoryGame, selectCurrentStep };
