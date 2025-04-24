import { Action } from "../../../assets/interfaces/redux/Action";
import { NEXT_PAGE,PREVIOUS_PAGE,SET_SORT } from "./actions/actionsTypes";

export interface GameRoomsState {
     page: number;
     sort: string;
}

const initialState: GameRoomsState = {
     page:1,
     sort:''
};

export function gameRoomsReducer(
     state: GameRoomsState = initialState,
     action: Action<string | number>
   ): GameRoomsState {
     switch (action.type) {
       case NEXT_PAGE: return {...state,page: state.page + 1};   
       case PREVIOUS_PAGE: return {...state,page: state.page - 1};   
       case SET_SORT: return {...state,sort: action.payload as string};
     }
     return state;
}