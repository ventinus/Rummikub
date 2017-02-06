import React from 'react';
import Tile from '../Tile';
import playerStyles from './Player.scss';
import tileWrapperStyles from '../Tile/TileWrapper.scss';
const { PropTypes } = React;

const Player = ({tray_data, index, tilesLeft, onDrawClick}) => {
  return (
    <div className="player">
      <h3 className="player__name">Player { index }</h3>
      <button type="button" onClick={ onDrawClick } disabled={ tilesLeft <= 0 } >Draw</button>
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

export default Player;
