import React from 'react';
import { connect } from 'react-redux';
import Tile from 'components/Tile';
import { drawTile } from 'actions';
import './Bag.scss';
const { PropTypes } = React;

const Bag = ({bag, drawTile}) => {
  return (
    <div className="bag-container">
      <button className="bag-container__bag" onClick={ drawTile } disabled={ (bag.length <= 0) }>THE BAG</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bag: state.rummikub.bag
})

export default connect(
  mapStateToProps,
  {
    drawTile
  }
)(Bag);
