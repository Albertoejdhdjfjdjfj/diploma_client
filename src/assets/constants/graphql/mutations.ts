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
    creator {
      playerId
      nickname
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
export const JOIN_GAME_ROOM = gql`
  mutation Mutation($id: ID!) {
  joinGameRoom(id: $id) {
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
