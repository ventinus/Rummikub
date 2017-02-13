import React, { PropTypes, Component } from "react";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PlayerSetupInfo from 'components/Player/SetupInfo';
import { addPlayer, drawTile } from 'actions';
import { PLAYER_TYPES } from 'helpers/constants';

// TODO: add error message for no name input
// TODO: add error message for at least one human

class Setup extends Component {
  constructor(props) {
    super(props);
    this.addPlayerClick = this.addPlayerClick.bind(this);
    this.onStartClick = this.onStartClick.bind(this);
    this.input = '';
  }

  addPlayerClick(e) {
    const name = this.input.value;

    if (name.length === 0) return;

    const player_type = document.querySelector('.js-player-type').value;
    this.props.addPlayer(this.input.value, player_type);
    this.input.value = '';
  }

  onStartClick() {
    const atLeastOneHuman = this.props.players
      .map(p => p.player_type)
      .some(t => t === PLAYER_TYPES.HUMAN);

    const playersCount = this.props.players.length;

    if (playersCount <= 1 || !atLeastOneHuman) return;

    // seed players trays with 14 tiles each.
    for (let i = 0; i < 14 * playersCount; i++) {
      this.props.drawTile();
    }

    this.props.router.push('/game')
  }

  render() {
    return (
      <div>
        <h1>lets set up a game, shall we! Max players: 4</h1>
        <label htmlFor="name">Enter Name</label>
        <input
          type="text"
          id="name"
          ref={node => {
            this.input = node;
          }}
        />
        <select className="js-player-type">
          <option value={ PLAYER_TYPES.HUMAN }>Human</option>
          <option value={ PLAYER_TYPES.COMPUTER }>Computer</option>
        </select>
        <button
          type="button"
          disabled={(this.props.players.length >= 4)}
          onClick={ this.addPlayerClick }
        >Add Player</button>
        <button onClick={ this.onStartClick }>Start the game already</button>
        <div className="players">
          { this.props.players.map((player, i) =>
            <PlayerSetupInfo
              key={ i }
              data={ player }
              index={ i }
            />
          )}
        </div>
      </div>
    );
  }
};

Setup.propTypes = {};
Setup.defaultProps = {};

const mapStateToProps = (state) => ({
  players: state.rummikub.players
})


export default withRouter(connect(
  mapStateToProps,
  {
    addPlayer,
    drawTile
  }
)(Setup));
