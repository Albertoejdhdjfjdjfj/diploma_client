import { combineReducers } from 'redux';
import { gameRoomsReducer } from './reducers/gameRoomReducer/gameRoomsReducer';
import { notificationsReducer } from './reducers/notificationsReducer/notificationsReducer';
import { userReducer } from './reducers/userReducer/userReducer';

const rootReducer = combineReducers({
  gameRooms: gameRoomsReducer,
  notifications: notificationsReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
