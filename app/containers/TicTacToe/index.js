import { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { TicTacToe } from './TicTacToe';
import { actionSelectSquare } from './actions';
import { selectSquares, selectIsFirstPlayerNext } from './selectors';

const mapStateToProps = createStructuredSelector({
  squares: selectSquares(),
  isFirstPlayerNext: selectIsFirstPlayerNext(),
});

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
