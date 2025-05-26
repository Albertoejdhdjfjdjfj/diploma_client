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
  subscription NewMeassage($gameId: String!, $token: String) {
    newMessage(gameId: $gameId, token: $token) {
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
