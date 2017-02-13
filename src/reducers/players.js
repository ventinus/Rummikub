import { ADD_PLAYER, REMOVE_PLAYER, DRAW_TILE } from 'actions/actionTypes';

let player_id = 0;

const PLAYERS_MAP = {
  [ADD_PLAYER]: (state, action) => {
    return [
      ...state,
      {
        id: player_id++,
        player_type: action.player_type,
        name: action.name,
        tiles: []
      }
    ];
  },
  [REMOVE_PLAYER]: (state, action) => {
    const { index } = action;

    return [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ];
  },
  [DRAW_TILE]: (state, action) => {
    const { playerIndex } = action;

    return [
      ...state.slice(0, playerIndex),
      {
        ...state[playerIndex],
        tiles: [
          ...state[playerIndex].tiles,
          action.tile
        ]
      },
      ...state.slice(playerIndex + 1)
    ];
  }
}

const players = (state = [], action) => {
  if (!PLAYERS_MAP.hasOwnProperty(action.type)) return state;

  return PLAYERS_MAP[action.type](state, action);
}


export default players;
