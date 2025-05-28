import { gql } from '@apollo/client';

export const UPDATED_GAME_ROOM = gql`
  subscription Subscription {
    updatedGameRoom {
      creator {
        nickname
        playerId
      }
      id
      name
      observers {
        nickname
        playerId
      }
      players {
        nickname
        playerId
      }
    }
  }
`;

export const NEW_MESSAGE = gql`
  subscription NewMeassage($token: String, $gameId: String!) {
    newMessage(token: $token, gameId: $gameId) {
      content
      sender {
        nickname
        playerId
      }
    }
  }
`;

export const ROLE = gql`
  subscription Subscription($gameId: String!, $token: String) {
    role(gameId: $gameId, token: $token) {
      role
    }
  }
`;

export const ACTIVE_GAME = gql`
  subscription ActiveGame($token: String) {
    activeGame(token: $token) {
      gameId
    }
  }
`;
