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
  mutation CreateGameRoom($name: String!) {
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

export const JOIN_TO_GAME_ROOM = gql`
  mutation JoinToGameRoom($id: ID!) {
    joinGameRoom(id: $id) {
      id
    }
  }
`;

export const LEAVE_GAME_ROOM = gql`
  mutation LeaveGameRoom($id: ID!) {
    leaveGameRoom(id: $id) {
      id
    }
  }
`;

export const START_GAME = gql`
  mutation StartGame($id: ID!) {
    startGame(id: $id)
  }
`;

export const SEND_MESSAGE = gql`
  mutation SendMessage($content: String!, $gameId: String!) {
    sendMessage(content: $content, gameId: $gameId)
  }
`;
