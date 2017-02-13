import React, { PropTypes } from "react";
import Tile from 'components/Tile';
import "./Tray.scss";

const Tray = ({tiles}) => {

  return (
    <ul className="tray">
      { tiles.map((t, i) =>
        <li key={ i }>
          <Tile data={ t } />
        </li>
      )}
    </ul>
  );
};

Tray.propTypes = {};
Tray.defaultProps = {};

export default Tray;
