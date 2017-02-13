import React, { PropTypes } from "react";
import Tray from 'components/Tray';
import "./PlayerGameInfo.scss";

const PlayerGameInfo = ({data}) => {

  return (
    <div>
      <h2>{data.name}</h2>
      <Tray tiles={ data.tiles } />
    </div>
  );
};

PlayerGameInfo.propTypes = {};
PlayerGameInfo.defaultProps = {};

export default PlayerGameInfo;
