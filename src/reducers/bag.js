import { DRAW_TILE } from 'actions/actionTypes';

const BAG_MAP = {
  [DRAW_TILE]: (state, action) => {
    return [
      ...state.slice(0, action.tileIndex),
      ...state.slice(action.tileIndex + 1)
    ];
  }
};

const bag = (state = [], action) => {
  if (!BAG_MAP.hasOwnProperty(action.type)) return state;

  return BAG_MAP[action.type](state, action);
}

export default bag;
