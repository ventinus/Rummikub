import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import { removePlayer } from 'actions';
import "./PlayerSetupInfo.scss";

const PlayerSetupInfo = ({data, index, removePlayer}) => {
  return (
    <div className="player-setup-info">
      <p>name: { data.name }</p>
      <p>type: { data.player_type }</p>
      <button onClick={ removePlayer.bind(null, index) }>X</button>
    </div>
  );
};

PlayerSetupInfo.propTypes = {};
PlayerSetupInfo.defaultProps = {};

export default connect(
  null,
  {
    removePlayer
  }
)(PlayerSetupInfo);
