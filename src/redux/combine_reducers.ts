import { combineReducers, Reducer } from 'redux';

export interface State {
  fff: string;
}

const rootReducer: Reducer<State> = combineReducers<State>({ fff: '' });

export default rootReducer;
