import { SET_ACTIVE_GAME_ID } from './actionsTypes';
import { Action } from '../../../../assets/interfaces/redux/Action';

export function setActiveGameId(gameId: string | null): Action<string | null> {
  return { type: SET_ACTIVE_GAME_ID, payload: gameId };
}
