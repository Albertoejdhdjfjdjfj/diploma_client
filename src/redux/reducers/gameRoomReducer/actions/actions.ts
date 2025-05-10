import { NEXT_PAGE, PREVIOUS_PAGE, SET_SORT } from './actionsTypes';
import { Action } from '../../../../assets/interfaces/redux/Action';

export function nextPage(): Action {
  return { type: NEXT_PAGE, payload: undefined };
}

export function previousPage(): Action {
  return { type: PREVIOUS_PAGE, payload: undefined };
}

export function setSort(sort: string): Action<string> {
  return { type: SET_SORT, payload: sort };
}

// export function fetchGameRooms(
//   client: ApolloClient<NormalizedCacheObject>,
//   sort: string,
//   page: number,
//   limit: number
// ): Action<{
//   client: ApolloClient<NormalizedCacheObject>;
//   sort: string;
//   page: number;
//   limit: number;
// }> {
//   return { type: FETCH_GAME_ROOMS, payload: { client, sort, page, limit } };
// }

// export function loadingGameRooms(isLoading:boolean): Action<boolean> {
//   return { type: LOADING_GAME_ROOMS, payload: isLoading };
// }

// export function errorGameRooms(error: string): Action<string> {
//   return { type: ERROR_GAME_ROOMS, payload: error };
// }

// export function setGameRooms(gameRooms: Array<GameRoom>): Action<Array<GameRoom>> {
//   return { type: SET_GAME_ROOMS, payload: gameRooms };
// }

// export function createGameRoom(
//   client: ApolloClient<NormalizedCacheObject>,
//   name:string,
// ): Action<{
//   client: ApolloClient<NormalizedCacheObject>,
//   name:string,
// }> {
//   return { type: CREATE_GAME_ROOM, payload: { client, name } };
// }
