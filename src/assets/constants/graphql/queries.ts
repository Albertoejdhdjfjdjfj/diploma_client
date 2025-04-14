import { gql } from '@apollo/client';

export const LOG_IN = gql`
  query Query($email: String!, $password: String!) {
    userLogIn(email: $email, password: $password) {
      token
      user {
        id
        nickname
        email
      }
    }
  }
`;

export const GET_GAME_ROOMS = gql`
  query GetGameRooms($sort: String, $page: Int, $limit: Int) {
    getGameRooms(sort: $sort, page: $page, limit: $limit) {
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
`;
