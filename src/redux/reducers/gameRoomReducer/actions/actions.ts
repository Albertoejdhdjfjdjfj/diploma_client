import { NEXT_PAGE, PREVIOUS_PAGE, SET_SORT } from './actionsTypes';
import { Action } from '../../../../assets/interfaces/redux/Action';

export function nextPage(): Action {
  return { type: NEXT_PAGE };
}

export function previousPage(): Action {
  return { type: PREVIOUS_PAGE };
}

export function setSort(sort: string): Action<string> {
  return { type: SET_SORT, payload: sort };
}
