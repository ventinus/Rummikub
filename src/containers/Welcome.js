import React, { PropTypes } from "react";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { initializeGame } from 'actions';

const Welcome = (props) => {

  const onInitializeClick = () => {
    props.initializeGame();
    props.router.push('/setup')
  }

  return (
    <div>
      <h1>Welcome to Rummikub</h1>
      <button type="button" onClick={ onInitializeClick }>Click to start a new game!</button>
    </div>
  );
};

Welcome.propTypes = {};
Welcome.defaultProps = {};

export default withRouter(connect(
  null,
  { initializeGame }
)(Welcome));
