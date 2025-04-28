import { combineReducers } from 'redux';
import { gameRoomsReducer } from './reducers/gameRoomReducer/gameRoomsReducer';

const rootReducer = combineReducers({
  gameRooms: gameRoomsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
