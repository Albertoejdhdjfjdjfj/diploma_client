'use strict';
exports.__esModule = true;
var redux_1 = require('redux');
var gameRoomsReducer_1 = require('./reducers/gameRoomReducer/gameRoomsReducer');
var notificationsReducer_1 = require('./reducers/notificationsReducer/notificationsReducer');
var userReducer_1 = require('./reducers/userReducer/userReducer');
var gameReducer_1 = require('./reducers/gameReducer/gameReducer');
var rootReducer = redux_1.combineReducers({
  gameRooms: gameRoomsReducer_1.gameRoomsReducer,
  notifications: notificationsReducer_1.notificationsReducer,
  user: userReducer_1.userReducer,
  game: gameReducer_1.gameReducer
});
exports['default'] = rootReducer;
