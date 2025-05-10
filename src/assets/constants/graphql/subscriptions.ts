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

export const CHAT = gql`
  subscription Chat($token: String) {
    message(token: $token) {
      chat {
        content
        sender {
          user {
            nickname
            playerId
          }
        }
      }
    }
  }
`;
