import { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { TicTacToe } from './TicTacToe';
import { actionSelectSquare } from './actions';
import { selectHistoryGame, selectCurrentStep } from './selectors';

const mapStateToProps = createStructuredSelector({
  historyGame: selectHistoryGame(),
  currentStep: selectCurrentStep(),
});

// const mapStateToProps = (q,w,e) => {
//   console.log(q,w,e)
//   return {
//
//   };
// }

const mapDispatchToProps = dispatch => ({
  handleSelectSquare: payload => dispatch(actionSelectSquare(payload)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TicTacToe);
