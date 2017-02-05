import * as types from '../actions/actionTypes';

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

const INITIAL_STATE = {
  "player_trays": [],
  "board": [],
  "bag": fillBag()
};

const RUMMIKUB_MAP = {
  [types.RESET_GAME]: (state, action) => { return INITIAL_STATE; },
  [types.ADD_PLAYER]: (state, action) => {
    if (state.player_trays.length >= 4) return state;

    let newTrays = state.player_trays.concat({});

    return Object.assign({},
      state,
      {
        player_trays: [
          ...state.player_trays,
          {
            "raw_tiles": []
          }
        ]

      }
    );
  },
  [types.DRAW]: (state, action) => {
    let tileIndex = Math.floor(Math.random() * state.bag.length);
    let tray = {
      "raw_tiles": [
        ...state.player_trays[action.player_index].raw_tiles,
        state.bag[tileIndex]
      ]
    };

    return Object.assign({},
      state,
      {
        bag: [
          ...state.bag.slice(0, tileIndex),
          ...state.bag.slice(tileIndex + 1)
        ],
        player_trays: [
          ...state.player_trays.slice(0, action.player_index),
          tray,
          ...state.player_trays.slice(action.player_index + 1)
        ]
      }
    );
  }
}

const rummikub = (
  state = INITIAL_STATE,
  action
) => {
  if (!RUMMIKUB_MAP.hasOwnProperty(action.type)) return state;

  return RUMMIKUB_MAP[action.type](state, action);
}


export default rummikub;
