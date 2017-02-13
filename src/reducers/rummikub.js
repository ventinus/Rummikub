import {
  INITIALIZE_GAME, START_GAME, COMPLETE_GAME, END_GAME,
  ADD_PLAYER, REMOVE_PLAYER,
  DRAW_TILE
} from 'actions/actionTypes';
import { GAME_STATES, PLAYER_TYPES } from 'helpers/constants';
import players from './players';
import bag from './bag';

const fillBag = () => {
  const COLORS = ["blue", "orange", "red", "black"];

  let bag = [];
  COLORS.forEach(color => {
    for (let k = 0; k < 2; k++) {
      for (let i = 1; i < 14; i++) {
        bag.push({
          "color": color,
          "value": i
        })
      }
    }
  });

  return bag;
}

let gameId = 0;

const INITIAL_STATE = {
  id: gameId++,
  status: "inactive",
  current_player_index: 0,
  players: [],
  board: [],
  bag: fillBag()
};


const rummikub = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case INITIALIZE_GAME:
    case START_GAME:
    case COMPLETE_GAME:
    case END_GAME:
      return {
        ...state,
        status: action.status
      };
    case ADD_PLAYER:
    case REMOVE_PLAYER:
      return {
        ...state,
        players: players(state.players, action)
      };
    case DRAW_TILE:
      // fairly copmlex action...
      //   - increments player index
      //   - removes a tile from the bag
      //   - adds the tile to the current players tiles
      action.tileIndex = Math.floor(Math.random() * state.bag.length);
      action.tile = state.bag[action.tileIndex];

      const playerIndex = state.current_player_index;
      action.playerIndex = playerIndex;
      const nextPlayerIndex = playerIndex + 1 < state.players.length ? playerIndex + 1 : 0;

      return {
        ...state,
        current_player_index: nextPlayerIndex,
        bag: bag(state.bag, action),
        players: players(state.players, action)
      };
    default:
      return state;
  }
}


export default rummikub;
