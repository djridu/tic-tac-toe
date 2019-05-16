import React from 'react';
import PropTypes from 'prop-types';
import { useInjectReducer } from 'utils/injectReducer';
import { ticTacToeReducer } from './reducer';
import './styles.css';

TicTacToe.propTypes = {
  historyGame: PropTypes.shape({
    squares: PropTypes.array.isRequired,
  }).isRequired,
  handleSelectSquare: PropTypes.func.isRequired,
};

export function TicTacToe(props) {
  const { historyGame, currentStep, handleSelectSquare } = props;
  const squares = historyGame[currentStep];

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
