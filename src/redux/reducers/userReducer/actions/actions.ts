import { FETCH_USER_INFO, SET_USER_INFO } from './actionsTypes';
import { Action } from '../../../../assets/interfaces/redux/Action';
import { UserInfo } from '../../../../assets/interfaces/game/UserInfo';

export function fetchUserInfo(): Action<undefined> {
  return { type: FETCH_USER_INFO, payload: undefined };
}

export function setUserInfo(userInfo: UserInfo | null): Action<UserInfo | null> {
  return { type: SET_USER_INFO, payload: userInfo };
}
