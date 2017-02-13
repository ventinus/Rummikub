import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import Bag from 'components/bag';
import PlayerGameInfo from 'components/Player/GameInfo';

const Game = ({players}) => {

  return (
    <div>
      <h1>its game time</h1>
      <Bag />
      { players.map((p, i) =>
        <PlayerGameInfo
          key={ i }
          data={ p }
        />
      )}
    </div>
  );
};

Game.propTypes = {};
Game.defaultProps = {};

const mapStateToProps = (state) => ({
  players: state.rummikub.players
})

export default connect(mapStateToProps)(Game);
