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
exports.GET_ACTIVE_GAME =
  exports.GET_PROFILE_DATA =
  exports.GET_MESSAGES =
  exports.GET_GAME_ROOMS =
  exports.LOG_IN =
    void 0;
var client_1 = require('@apollo/client');
exports.LOG_IN = client_1.gql(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  query Query($email: String!, $password: String!) {\n    userLogIn(email: $email, password: $password) {\n      token\n    }\n  }\n'
      ],
      [
        '\n  query Query($email: String!, $password: String!) {\n    userLogIn(email: $email, password: $password) {\n      token\n    }\n  }\n'
      ]
    ))
);
exports.GET_GAME_ROOMS = client_1.gql(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  query GetGameRooms($sort: String!, $page: Int!, $limit: Int!) {\n    getGameRooms(sort: $sort, page: $page, limit: $limit) {\n      creator {\n        nickname\n        playerId\n      }\n      id\n      name\n      observers {\n        nickname\n        playerId\n      }\n      players {\n        nickname\n        playerId\n      }\n    }\n  }\n'
      ],
      [
        '\n  query GetGameRooms($sort: String!, $page: Int!, $limit: Int!) {\n    getGameRooms(sort: $sort, page: $page, limit: $limit) {\n      creator {\n        nickname\n        playerId\n      }\n      id\n      name\n      observers {\n        nickname\n        playerId\n      }\n      players {\n        nickname\n        playerId\n      }\n    }\n  }\n'
      ]
    ))
);
exports.GET_MESSAGES = client_1.gql(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  query GetMessages($gameId: String!) {\n  getMessages(gameId: $gameId) {\n    content\n    sender {\n      nickname\n      playerId\n    }\n  }\n}\n'
      ],
      [
        '\n  query GetMessages($gameId: String!) {\n  getMessages(gameId: $gameId) {\n    content\n    sender {\n      nickname\n      playerId\n    }\n  }\n}\n'
      ]
    ))
);
exports.GET_PROFILE_DATA = client_1.gql(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      ['\n  query getProfileData {\n    getProfileData {\n      id\n      nickname\n    }\n  }\n'],
      ['\n  query getProfileData {\n    getProfileData {\n      id\n      nickname\n    }\n  }\n']
    ))
);
exports.GET_ACTIVE_GAME = client_1.gql(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['\n  query getActiveGame {\n    getActiveGame {\n      gameId\n    }\n  }\n'],
      ['\n  query getActiveGame {\n    getActiveGame {\n      gameId\n    }\n  }\n']
    ))
);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
