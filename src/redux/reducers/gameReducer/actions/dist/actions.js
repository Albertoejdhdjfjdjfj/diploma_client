'use strict';
exports.__esModule = true;
exports.setActiveGameId = void 0;
var actionsTypes_1 = require('./actionsTypes');
function setActiveGameId(gameId) {
  return { type: actionsTypes_1.SET_ACTIVE_GAME_ID, payload: gameId };
}
exports.setActiveGameId = setActiveGameId;
