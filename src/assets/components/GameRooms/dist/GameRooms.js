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
var react_1 = require('react');
var queries_1 = require('../../constants/graphql/queries');
var subscriptions_1 = require('../../constants/graphql/subscriptions');
var client_1 = require('@apollo/client');
var react_redux_1 = require('react-redux');
var GameRoomsFilter_1 = require('../GameRoomsFilter/GameRoomsFilter');
var GameRoomBlock_1 = require('../GameRoom/GameRoomBlock');
var Paginator_1 = require('../Paginator/Paginator');
require('./GameRooms.css');
var GameRooms = function () {
  var _a = react_1.useState(undefined),
    gameRooms = _a[0],
    setGameRooms = _a[1];
  var _b = react_redux_1.useSelector(function (state) {
      return state.gameRooms;
    }),
    sort = _b.sort,
    page = _b.page,
    limit = _b.limit;
  var _c = client_1.useLazyQuery(queries_1.GET_GAME_ROOMS, {
      variables: { sort: sort, page: page, limit: limit },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'no-cache'
    }),
    getGameRooms = _c[0],
    _d = _c[1],
    loading = _d.loading,
    error = _d.error;
  var data = client_1.useSubscription(subscriptions_1.UPDATED_GAME_ROOM).data;
  var handleGetRooms = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, getGameRooms()];
          case 1:
            data = _a.sent().data;
            setGameRooms(data === null || data === void 0 ? void 0 : data.getGameRooms);
            return [2 /*return*/];
        }
      });
    });
  };
  react_1.useEffect(
    function () {
      handleGetRooms();
    },
    [page, sort, data]
  );
  return React.createElement(
    'div',
    { className: 'game_rooms' },
    React.createElement(GameRoomsFilter_1['default'], null),
    React.createElement(
      'div',
      { className: 'game_rooms_columns' },
      React.createElement('p', null, 'Slots'),
      React.createElement('p', null, 'Game'),
      React.createElement('p', null, 'Participants'),
      React.createElement('p', null, 'Creator'),
      React.createElement('p', null)
    ),
    loading && React.createElement('div', null, '...Loading'),
    error && React.createElement('div', null, 'Error! ', error.message),
    !gameRooms
      ? React.createElement('div', null, 'No data available')
      : React.createElement(
          'div',
          { className: 'rooms' },
          gameRooms.map(function (game_room) {
            return React.createElement(GameRoomBlock_1['default'], { game_room: game_room });
          })
        ),
    React.createElement(Paginator_1['default'], null)
  );
};
exports['default'] = GameRooms;
