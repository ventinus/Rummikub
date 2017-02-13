import React from 'react';
import { connect } from 'react-redux';
import { addPlayer, drawTile } from 'actions';
const { PropTypes } = React;

const AddPlayerBtn = ({children, className, style, player_trays, addPlayer, drawTile}) => {
  const onAddPlayerClick = () => {
    addPlayer()

    const newPlayerIndex = player_trays.length;

    for (let i = 0; i < 14; i++) {
      drawTile(newPlayerIndex);
    }
  }

  return (
    <button
      onClick={ onAddPlayerClick }
      disabled={ player_trays.length >= 4 }
      style={ style }
      className={ className }
    >
      { children }
    </button>
  );
};

AddPlayerBtn.propTypes = {}
AddPlayerBtn.defaultProps = {}

export default connect(
  (state) => ({
    player_trays: state.rummikub.player_trays
  }),
  {
    addPlayer,
    drawTile
  }
)(AddPlayerBtn);
