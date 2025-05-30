'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
exports.gameReducer = void 0;
var actionsTypes_1 = require('./actions/actionsTypes');
var initialState = {
  activeGameId: null
};
function gameReducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }
  switch (action.type) {
    case actionsTypes_1.SET_ACTIVE_GAME_ID:
      return __assign(__assign({}, state), { activeGameId: action.payload });
  }
  return state;
}
exports.gameReducer = gameReducer;
