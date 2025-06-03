import { gql } from '@apollo/client';

export const UPDATED_GAME_ROOM = gql`
  subscription UpdatedGameRoom {
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
 subscription Subscription($token: String,$gameId: String) {
  newMessage(token: $token,gameId: $gameId) {
    message {
      content
      id
      sender {
        nickname
        playerId
      }
    }
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
