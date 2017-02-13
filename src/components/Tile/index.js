import React from 'react';
import styles from './Tile.scss';
const { PropTypes } = React;

const Tile = ({data}) => {

  return (
    <span className={ `tile tile--${data.color}` }>
      <span className="tile__value"> { data.value }</span>
    </span>
  );
};

Tile.propTypes = {
  data: PropTypes.object.isRequired
};

export default Tile;
