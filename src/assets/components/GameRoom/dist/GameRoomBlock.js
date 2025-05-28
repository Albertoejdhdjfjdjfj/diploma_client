'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                    ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
exports.__esModule = true;
var react_router_dom_1 = require('react-router-dom');
var client_1 = require('@apollo/client');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../../redux/reducers/notificationsReducer/actions/actions');
var js_cookie_1 = require('js-cookie');
var game_config_1 = require('../../constants/game/game_config');
var mutations_1 = require('../../constants/graphql/mutations');
var gamepad_svg_1 = require('../../images/gamepad.svg');
var plus_svg_1 = require('../../images/plus.svg');
require('./GameRoomBlock.css');
var GameRoomBlock = function (_a) {
  var game_room = _a.game_room;
  var userInfo = react_redux_1.useSelector(function (state) {
    return state.user.userInfo;
  });
  var joinToGameRoom = client_1.useMutation(mutations_1.JOIN_TO_GAME_ROOM)[0];
  var leaveGameRoom = client_1.useMutation(mutations_1.LEAVE_GAME_ROOM)[0];
  var startGame = client_1.useMutation(mutations_1.START_GAME)[0];
  var players = game_room.players.length;
  var observers = game_room.observers.length;
  var navigate = react_router_dom_1.useNavigate();
  var dispatch = react_redux_1.useDispatch();
  var inGame = function () {
    if (
      game_room.players.some(function (palyer) {
        return (
          palyer.playerId === (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id)
        );
      }) ||
      game_room.observers.some(function (observer) {
        return (
          observer.playerId === (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id)
        );
      })
    ) {
      return true;
    }
    return false;
  };
  var handleJoinGameRoom = function (gameId) {
    return __awaiter(void 0, void 0, void 0, function () {
      var error_1, err;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [
              4 /*yield*/,
              joinToGameRoom({
                variables: { id: gameId },
                context: {
                  headers: {
                    Authorization: js_cookie_1['default'].get('token')
                  }
                }
              })
            ];
          case 1:
            _a.sent();
            return [3 /*break*/, 3];
          case 2:
            error_1 = _a.sent();
            err = error_1;
            if (!js_cookie_1['default'].get('token')) {
              navigate('/logIn');
            } else {
              dispatch(actions_1.sendNotification(err.message));
            }
            return [3 /*break*/, 3];
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };
  var handleLeaveGameRoom = function (gameId) {
    return __awaiter(void 0, void 0, void 0, function () {
      var error_2, err;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [
              4 /*yield*/,
              leaveGameRoom({
                variables: { id: gameId },
                context: {
                  headers: {
                    Authorization: js_cookie_1['default'].get('token')
                  }
                }
              })
            ];
          case 1:
            _a.sent();
            return [3 /*break*/, 3];
          case 2:
            error_2 = _a.sent();
            err = error_2;
            if (!js_cookie_1['default'].get('token')) {
              navigate('/logIn');
            } else {
              dispatch(actions_1.sendNotification(err.message));
            }
            return [3 /*break*/, 3];
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };
  var handleStartGame = function (gameId) {
    return __awaiter(void 0, void 0, void 0, function () {
      var error_3, err;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [
              4 /*yield*/,
              startGame({
                variables: { id: gameId },
                context: {
                  headers: {
                    Authorization: js_cookie_1['default'].get('token')
                  }
                }
              })
            ];
          case 1:
            _a.sent();
            navigate('/game');
            return [3 /*break*/, 3];
          case 2:
            error_3 = _a.sent();
            err = error_3;
            if (!js_cookie_1['default'].get('token')) {
              navigate('/logIn');
            } else {
              dispatch(actions_1.sendNotification(err.message));
            }
            return [3 /*break*/, 3];
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };
  return React.createElement(
    'div',
    { className: 'game_room' },
    React.createElement('span', null, players + observers, '/', game_config_1.MAX_NUMBER_PLAYERS),
    React.createElement('p', { className: 'game_room_name' }, game_room.name),
    React.createElement(
      'div',
      { className: 'participants' },
      game_room.players.map(function (player) {
        return React.createElement('p', { key: player.playerId }, player.nickname);
      }),
      game_room.observers.map(function (observer) {
        return React.createElement('p', { key: observer.playerId }, observer.nickname);
      })
    ),
    React.createElement('p', { className: 'game_room_creator' }, game_room.creator.nickname),
    React.createElement(
      'div',
      { className: 'actions_list' },
      React.createElement(
        'button',
        {
          onClick: function () {
            return handleStartGame(game_room.id);
          }
        },
        React.createElement('img', {
          alt: 'start game',
          title: 'start game',
          src: gamepad_svg_1['default']
        })
      ),
      React.createElement(
        'button',
        {
          onClick: function () {
            return handleJoinGameRoom(game_room.id);
          }
        },
        React.createElement('img', {
          alt: 'join to game room',
          title: 'join to game room',
          src: plus_svg_1['default']
        })
      )
    )
  );
};
exports['default'] = GameRoomBlock;
