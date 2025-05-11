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
exports.START_GAME =
  exports.LEAVE_GAME_ROOM =
  exports.JOIN_TO_GAME_ROOM =
  exports.CREATE_GAME_ROOM =
  exports.SIGN_UP =
    void 0;
var client_1 = require('@apollo/client');
exports.SIGN_UP = client_1.gql(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  mutation UserSignUp($nickname: String!, $email: String!, $password: String!) {\n    userSignUp(nickname: $nickname, email: $email, password: $password) {\n      id\n      nickname\n      email\n    }\n  }\n'
      ],
      [
        '\n  mutation UserSignUp($nickname: String!, $email: String!, $password: String!) {\n    userSignUp(nickname: $nickname, email: $email, password: $password) {\n      id\n      nickname\n      email\n    }\n  }\n'
      ]
    ))
);
exports.CREATE_GAME_ROOM = client_1.gql(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  mutation Mutation($name: String!) {\n    createGameRoom(name: $name) {\n      creator {\n        playerId\n        nickname\n      }\n      id\n      name\n      observers {\n        nickname\n        playerId\n      }\n      players {\n        nickname\n        playerId\n      }\n    }\n  }\n'
      ],
      [
        '\n  mutation Mutation($name: String!) {\n    createGameRoom(name: $name) {\n      creator {\n        playerId\n        nickname\n      }\n      id\n      name\n      observers {\n        nickname\n        playerId\n      }\n      players {\n        nickname\n        playerId\n      }\n    }\n  }\n'
      ]
    ))
);
exports.JOIN_TO_GAME_ROOM = client_1.gql(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  mutation JoinToGameRoom($id: ID!) {\n    joinGameRoom(id: $id) {\n      id\n    }\n  }\n'
      ],
      [
        '\n  mutation JoinToGameRoom($id: ID!) {\n    joinGameRoom(id: $id) {\n      id\n    }\n  }\n'
      ]
    ))
);
exports.LEAVE_GAME_ROOM = client_1.gql(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  mutation LeaveGameRoom($id: ID!) {\n    leaveGameRoom(id: $id) {\n      id\n    }\n  }\n'
      ],
      [
        '\n  mutation LeaveGameRoom($id: ID!) {\n    leaveGameRoom(id: $id) {\n      id\n    }\n  }\n'
      ]
    ))
);
exports.START_GAME = client_1.gql(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['\n  mutation Mutation($gameId: ID!) {\n    startGame(gameId: $gameId)\n  }\n'],
      ['\n  mutation Mutation($gameId: ID!) {\n    startGame(gameId: $gameId)\n  }\n']
    ))
);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
