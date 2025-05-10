import { SET_NOTIFICATION } from './actions/actionsTypes';

export interface NotificationsState {
  content: string;
}

const initialState: NotificationsState = {
  content: ''
};

export function notificationsReducer(
  state: NotificationsState = initialState,
  action: any
): NotificationsState {
  switch (action.type) {
    case SET_NOTIFICATION:
      return { ...state, content: action.payload };
  }
  return state;
}
