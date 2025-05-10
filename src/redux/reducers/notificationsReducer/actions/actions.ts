import { SET_NOTIFICATION, SEND_NOTIFICATION } from './actionsTypes';
import { Action } from '../../../../assets/interfaces/redux/Action';

export function setNotification(payload: string): Action<string> {
  return { type: SET_NOTIFICATION, payload: payload };
}

export function sendNotification(payload: string): Action<string> {
  return { type: SEND_NOTIFICATION, payload: payload };
}
