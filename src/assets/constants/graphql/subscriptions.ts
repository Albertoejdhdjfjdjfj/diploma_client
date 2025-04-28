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
`
   