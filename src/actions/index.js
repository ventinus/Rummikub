import {
  INITIALIZE_GAME, START_GAME, COMPLETE_GAME, END_GAME,
  ADD_PLAYER, REMOVE_PLAYER,
  DRAW_TILE
} from './actionTypes';
import { GAME_STATES } from 'helpers/constants';

// Game action creators
// --------------------------------------
export const initializeGame = () => ({
  type: INITIALIZE_GAME,
  status: GAME_STATES.INITIALIZE_GAME
});

export const startGame = () => ({
  type: START_GAME,
  status: GAME_STATES.START_GAME
});

export const completeGame = () => ({
  type: COMPLETE_GAME,
  status: GAME_STATES.COMPLETE_GAME
});

export const endGame = () => ({
  type: END_GAME,
  status: GAME_STATES.END_GAME
});


// Player action creators
export const addPlayer = (name, player_type) => ({
  type: ADD_PLAYER,
  name,
  player_type
});

export const removePlayer = (index) => ({
  type: REMOVE_PLAYER,
  index
});

export const drawTile = () => ({
  type: DRAW_TILE
});

