import { NEXT_PAGE, PREVIOUS_PAGE, SET_SORT } from './actions/actionsTypes';

export interface GameRoomsState {
  page: number;
  sort: string;
  limit: number;
}

const initialState: GameRoomsState = {
  page: 1,
  sort: '',
  limit: 5
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
  }
  return state;
}
