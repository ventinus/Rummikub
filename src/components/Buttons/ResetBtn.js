import React from 'react';
import { connect } from 'react-redux';
import { resetGame } from 'actions';
const { PropTypes } = React;

const ResetBtn = ({children, className, style, resetGame}) => (
  <button
    onClick={ resetGame }
    style={ style }
    className={ className }
  >
    { children }
  </button>
);

ResetBtn.propTypes = {}
ResetBtn.defaultProps = {}

export default connect(
  null,
  {
    resetGame
  }
)(ResetBtn);
