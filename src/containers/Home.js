import React from 'react';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';
import Bag from '../components/Bag';
import Player from '../components/Player';
import Board from '../components/Board';

const Home = (props) => {
  let { player_trays, board, bag } = props.rummikub;

  const onResetClick = () => {
    props.dispatch({
      type: types.RESET_GAME
    });
  }

  const onAddPlayerClick = () => {
    props.dispatch({
      type: types.ADD_PLAYER
    });

    const player_index = player_trays.length;

    for (let i = 0; i < 14; i++) {
      props.dispatch({
        type: types.DRAW,
        player_index: player_index
      });
    }
  }

  const onPlayerDrawClick = (index) => {
    props.dispatch({
      type: types.DRAW,
      player_index: index
    });
  }

  return (
    <div>
      <h2>Play Rummikub</h2>
      <div className="game-controls">
        <button onClick={ onResetClick }>Reset</button>
        <button onClick={ onAddPlayerClick } disabled={ player_trays.length >= 4 }>Add Player</button>
      </div>
      <div className="players">
        { player_trays.map((tray, i) =>
          <Player
            key={ i }
            tray_data={ tray }
            index={ i + 1 }
            tilesLeft={ bag.length }
            onDrawClick={ onPlayerDrawClick.bind(null, i) }
          />
        )}
      </div>
      <Board data={ board } />
      <Bag tiles={ bag } />
    </div>
  );
}

// Map Props
// ------------------------------------------------
function mapStateToProps(state) {
  return {
    rummikub: state.rummikub
  }
}

export default connect(mapStateToProps)(Home);
