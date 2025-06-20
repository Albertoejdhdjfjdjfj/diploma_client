'use strict';
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
exports.__esModule = true;
exports.ACTIVE_GAME = exports.NEW_MESSAGE = exports.UPDATED_GAME_ROOM = void 0;
var client_1 = require('@apollo/client');
exports.UPDATED_GAME_ROOM = client_1.gql(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  subscription UpdatedGameRoom {\n    updatedGameRoom {\n      creator {\n        nickname\n        playerId\n      }\n      id\n      name\n      observers {\n        nickname\n        playerId\n      }\n      players {\n        nickname\n        playerId\n      }\n    }\n  }\n'
      ],
      [
        '\n  subscription UpdatedGameRoom {\n    updatedGameRoom {\n      creator {\n        nickname\n        playerId\n      }\n      id\n      name\n      observers {\n        nickname\n        playerId\n      }\n      players {\n        nickname\n        playerId\n      }\n    }\n  }\n'
      ]
    ))
);
exports.NEW_MESSAGE = client_1.gql(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n subscription Subscription($token: String,$gameId: String) {\n  newMessage(token: $token,gameId: $gameId) {\n    message {\n      content\n      id\n      sender {\n        nickname\n        playerId\n      }\n    }\n  }\n}\n'
      ],
      [
        '\n subscription Subscription($token: String,$gameId: String) {\n  newMessage(token: $token,gameId: $gameId) {\n    message {\n      content\n      id\n      sender {\n        nickname\n        playerId\n      }\n    }\n  }\n}\n'
      ]
    ))
);
exports.ACTIVE_GAME = client_1.gql(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  subscription ActiveGame($token: String) {\n    activeGame(token: $token) {\n      gameId\n    }\n  }\n'
      ],
      [
        '\n  subscription ActiveGame($token: String) {\n    activeGame(token: $token) {\n      gameId\n    }\n  }\n'
      ]
    ))
);
var templateObject_1, templateObject_2, templateObject_3;
