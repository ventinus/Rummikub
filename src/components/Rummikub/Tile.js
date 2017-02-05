import React from 'react';
const { PropTypes } = React;

const Tile = ({data}) => {

  return (
    <div className="tile">
      <span className="tile__color">{ data.color }</span>
      <span className="tile__value"> { data.value }</span>
    </div>
  );
};

Tile.propTypes = {
  data: PropTypes.object.isRequired
};

export default Tile;
