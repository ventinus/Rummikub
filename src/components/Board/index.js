import React from 'react';
const { PropTypes } = React;

const Board = ({data}) => {

  return (
    <div className="board">
      { data }
    </div>
  );
};

Board.propTypes = {
  data: PropTypes.array.isRequired
}

export default Board;
