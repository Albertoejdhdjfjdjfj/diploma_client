import { GameRoom } from '../../../assets/interfaces/game/GameRoom';
import { NEXT_PAGE, PREVIOUS_PAGE, SET_SORT } from './actions/actionsTypes';

export interface GameRoomsState {
  page: number;
  sort: string;
  limit: number;
  // gameRooms: Array<GameRoom>;
  // error: string;
  // loading: boolean;
}

const initialState: GameRoomsState = {
  page: 1,
  sort: '',
  limit: 5
  // gameRooms: [],
  // error: '',
  // loading: false
};

export function gameRoomsReducer(
  state: GameRoomsState = initialState,
  action: any
): GameRoomsState {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case PREVIOUS_PAGE:
      return { ...state, page: state.page - 1 };
    case SET_SORT:
      return { ...state, sort: action.payload };
    // case LOADING_GAME_ROOMS:
    //   return { ...state, loading: action.payload };
    // case ERROR_GAME_ROOMS:
    //   return { ...state, error: action.payload };
    // case SET_GAME_ROOMS:
    //   return { ...state, gameRooms: action.payload };
  }
  return state;
}
