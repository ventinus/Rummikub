import React from 'react';
import { connect } from 'react-redux';
import Bag from 'components/Bag';
import Player from 'components/Player';
import Board from 'components/Board';
import ResetBtn from 'components/Buttons/ResetBtn';
import AddPlayerBtn from 'components/Buttons/AddPlayerBtn';

const Home = ({player_trays, board, bag, resetGame}) => (
  <div>
    <h2>Play Rummikub</h2>
    <div className="game-controls">
      <ResetBtn>Reset</ResetBtn>
      <AddPlayerBtn>Add Player</AddPlayerBtn>
    </div>
    <div className="players">
      { player_trays.map((tray, i) =>
        <Player
          key={ i }
          tray_data={ tray }
          index={ i + 1 }
          tilesLeft={ bag.length }
        />
      )}
    </div>
    <Board data={ board } />
    <Bag tiles={ bag } />
  </div>
);

// Map Props
// ------------------------------------------------
function mapStateToProps(state) {
  return {
    player_trays: state.rummikub.player_trays,
    board: state.rummikub.board,
    bag: state.rummikub.bag
  }
}

export default connect(mapStateToProps)(Home);
