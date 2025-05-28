import { SET_ACTIVE_GAME_ID } from './actions/actionsTypes';

export interface GameState {
  activeGameId: string | null;
}

const initialState: GameState = {
  activeGameId: null
};

export function gameReducer(state: GameState = initialState, action: any): GameState {
  switch (action.type) {
    case SET_ACTIVE_GAME_ID:
      return { ...state, activeGameId: action.payload };
  }
  return state;
}
