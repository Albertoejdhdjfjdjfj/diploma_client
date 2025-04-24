import { gql } from '@apollo/client';

export const SIGN_UP = gql`
mutation UserSignUp($nickname: String!, $email: String!, $password: String!) {
     userSignUp(nickname: $nickname, email: $email, password: $password) {
       id
       nickname
       email
     }
   }
`;

export const CREATE_GAME_ROOM = gql`
mutation Mutation($name: String!) {
  createGameRoom(name: $name) {
    id
    name
    creator {
      creatorId
      nickname
    }
    players {
      playerId
      nickname
    }
    observers {
      playerId
      nickname
    }
  }
}
`