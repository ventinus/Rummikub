import React from 'react';
import styles from './Tile.scss';
const { PropTypes } = React;

const Tile = ({data}) => {

  return (
    <div className={ `tile tile--${data.color}` }>
      <span className="tile__value"> { data.value }</span>
    </div>
  );
};

Tile.propTypes = {
  data: PropTypes.object.isRequired
};

export default Tile;
