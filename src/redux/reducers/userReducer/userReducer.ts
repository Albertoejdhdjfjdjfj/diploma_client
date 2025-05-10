import { GameRoom } from '../../../assets/interfaces/game/GameRoom';
import { UserInfo } from '../../../assets/interfaces/game/UserInfo';
import { SET_USER_INFO } from './actions/actionsTypes';

export interface UserInfoState {
  userInfo: UserInfo | null;
}

const initialState: UserInfoState = {
  userInfo: null
};

export function userReducer(state: UserInfoState = initialState, action: any): UserInfoState {
  switch (action.type) {
    case SET_USER_INFO:
      return { ...state, userInfo: action.payload };
  }
  return state;
}
