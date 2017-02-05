import React from 'react';
import Tile from './Tile';
const { PropTypes } = React;

const Bag = ({tiles}) => {

  return (
    <div className="bag">
      { tiles.map((tile, i) => {
        <Tile
          key={ i }
          data={ tile }
        />
      })}
    </div>
  );
};

Bag.propTypes = {
  tiles: PropTypes.array.isRequired
};

export default Bag;
