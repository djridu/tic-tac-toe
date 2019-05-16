import React from 'react';
import PropTypes from 'prop-types';
import { useInjectReducer } from 'utils/injectReducer';
import { ticTacToeReducer } from './reducer';
import './styles.css';

TicTacToe.propTypes = {
  squares: PropTypes.array.isRequired,
  handleSelectSquare: PropTypes.func.isRequired,
};

export function TicTacToe(props) {
  const { squares, handleSelectSquare } = props;
  useInjectReducer({ key: 'ticTacToe', reducer: ticTacToeReducer });

  const getSquare = squareRow =>
    squareRow.map(squareIndex => (
      <div
        key={squareIndex}
        className="square"
        role="button"
        aria-hidden="true"
        onClick={() => handleSelectSquare({ squareIndex })}
      >
        {squares[squareIndex]}
      </div>
    ));

  return (
    <div className="board">
      <div className="board-row">{getSquare([0, 1, 2])}</div>
      <div className="board-row">{getSquare([3, 4, 5])}</div>
      <div className="board-row">{getSquare([6, 7, 8])}</div>
    </div>
  );
}
