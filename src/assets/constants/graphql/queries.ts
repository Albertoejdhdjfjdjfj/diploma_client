import { gql } from '@apollo/client';

export const LOG_IN = gql`
  query UserLogIn($email: String!, $password: String!) {
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

export const GET_MESSAGES = gql`
  query GetMessages($gameId: String!) {
    getMessages(gameId: $gameId) {
      content
      id
      sender {
        nickname
        playerId
      }
    }
  }
`;

export const GET_PROFILE_DATA = gql`
  query GetProfileData {
    getProfileData {
      id
      nickname
    }
  }
`;

export const GET_ACTIVE_GAME = gql`
  query GetActiveGame {
    getActiveGame {
      gameId
    }
  }
`;
