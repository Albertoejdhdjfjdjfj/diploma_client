import { gql } from '@apollo/client';

export const LOG_IN = gql`
  query Query($email: String!, $password: String!) {
    userLogIn(email: $email, password: $password) {
      token
    }
  }
`;

export const GET_GAME_ROOMS = gql`
  query GetGameRooms($sort: String!, $page: Int!, $limit: Int!) {
    getGameRooms(sort: $sort, page: $page, limit: $limit) {
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

export const GET_PROFILE_DATA = gql`
  query getProfileData {
    getProfileData {
      id
      nickname
    }
  }
`;
