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
var react_redux_1 = require('react-redux');
var client_1 = require('@apollo/client');
var queries_1 = require('../../assets/constants/graphql/queries');
var subscriptions_1 = require('../../assets/constants/graphql/subscriptions');
var mutations_1 = require('../../assets/constants/graphql/mutations');
var GameHeaderBar_1 = require('../../assets/components/GameHeaderBar/GameHeaderBar');
var send_svg_1 = require('../../assets/images/send.svg');
var js_cookie_1 = require('js-cookie');
var actions_1 = require('../../redux/reducers/notificationsReducer/actions/actions');
require('./Game.css');
var Game = function () {
  var userInfo = react_redux_1.useSelector(function (state) {
    return state.user.userInfo;
  });
  var gameId = react_redux_1.useSelector(function (state) {
    return state.game.activeGameId;
  });
  var token = js_cookie_1['default'].get('token');
  var dispatch = react_redux_1.useDispatch();
  var _a = react_1.useState([]),
    messages = _a[0],
    setMessages = _a[1];
  var _b = react_1.useState(''),
    content = _b[0],
    setContent = _b[1];
  var _c = react_1.useState(false),
    focus = _c[0],
    setFocus = _c[1];
  var getMessages = client_1.useLazyQuery(queries_1.GET_MESSAGES, {
    variables: { gameId: gameId },
    context: {
      headers: {
        Authorization: token
      }
    },
    fetchPolicy: 'no-cache'
  })[0];
  var newMessage = client_1.useSubscription(subscriptions_1.NEW_MESSAGE, {
    variables: { token: token, gameId: gameId }
  }).data;
  var sendMessage = client_1.useMutation(mutations_1.SEND_MESSAGE)[0];
  var handleGetRooms = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, getMessages()];
          case 1:
            data = _a.sent().data;
            setMessages(data === null || data === void 0 ? void 0 : data.getMessages);
            return [2 /*return*/];
        }
      });
    });
  };
  react_1.useEffect(
    function () {
      handleGetRooms();
    },
    [newMessage, gameId]
  );
  var isUserMessage = function (messageId) {
    return (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id) === messageId;
  };
  function handleInputMessage(e) {
    setContent(e.currentTarget.value);
  }
  function changeFocus() {
    setFocus(!focus);
  }
  var handleKeyDown = function (e) {
    return __awaiter(void 0, void 0, void 0, function () {
      var error_1, err;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(e.key === 'Enter')) return [3 /*break*/, 5];
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            return [
              4 /*yield*/,
              sendMessage({
                variables: { content: content, gameId: gameId },
                context: {
                  headers: {
                    Authorization: token
                  }
                }
              })
            ];
          case 2:
            _a.sent();
            return [3 /*break*/, 5];
          case 3:
            error_1 = _a.sent();
            err = error_1;
            dispatch(actions_1.sendNotification(err.message));
            return [3 /*break*/, 5];
          case 4:
            setContent('');
            return [7 /*endfinally*/];
          case 5:
            return [2 /*return*/];
        }
      });
    });
  };
  function handeleButtonClick() {
    return __awaiter(this, void 0, void 0, function () {
      var error_2, err;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, 3, 4]);
            return [
              4 /*yield*/,
              sendMessage({
                variables: { content: content, gameId: gameId },
                context: {
                  headers: {
                    Authorization: token
                  }
                }
              })
            ];
          case 1:
            _a.sent();
            return [3 /*break*/, 4];
          case 2:
            error_2 = _a.sent();
            err = error_2;
            dispatch(actions_1.sendNotification(err.message));
            return [3 /*break*/, 4];
          case 3:
            setContent('');
            return [7 /*endfinally*/];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  }
  return React.createElement(
    'div',
    { className: 'game' },
    React.createElement(GameHeaderBar_1['default'], null),
    React.createElement(
      'div',
      { className: 'messages' },
      messages &&
        messages.map(function (message) {
          return React.createElement(
            'div',
            {
              key: message.id,
              className: isUserMessage(message.sender.playerId) ? 'user_message' : 'message'
            },
            React.createElement(
              'p',
              null,
              !isUserMessage(message.sender.playerId)
                ? React.createElement('span', null, message.sender.nickname)
                : '',
              message.content
            )
          );
        })
    ),
    React.createElement(
      'div',
      { className: 'input_message' + ' ' + (focus ? 'focus' : '') },
      React.createElement('input', {
        type: 'text',
        onChange: handleInputMessage,
        onKeyDown: handleKeyDown,
        onFocus: changeFocus,
        onBlur: changeFocus,
        value: content
      }),
      React.createElement(
        'button',
        { type: 'submit', onClick: handeleButtonClick },
        React.createElement('img', { src: send_svg_1['default'], alt: 'Send' })
      )
    )
  );
};
exports['default'] = Game;
