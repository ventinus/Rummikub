import React from 'react';
import { connect } from 'react-redux';
import { drawTile } from 'actions';
import Tile from 'components/Tile';
import './Player.scss';
import 'components/Tile/TileWrapper.scss';
const { PropTypes } = React;

const Player = ({tray_data, index, tilesLeft, drawTile}) => {
  return (
    <div className="player">
      <h3 className="player__name">Player { index }</h3>
      <button type="button" onClick={ drawTile.bind(null, index - 1) } disabled={ tilesLeft <= 0 } >Draw</button>
      <div className="tile-wrapper tile-wrapper--tray">
        { tray_data.raw_tiles.map((tile, i) =>
          <Tile
            key={ i }
            data={ tile }
          />
        )}
      </div>
    </div>
  );
};

Player.propTypes = {
  tray_data: PropTypes.object.isRequired
}

export default connect(
  null,
  {
    drawTile
  }
)(Player);
