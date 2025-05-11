import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { sendNotification } from '../../../redux/reducers/notificationsReducer/actions/actions';
import Cookies from 'js-cookie';
import { Player } from '../../interfaces/game/Player';
import { RootState } from '../../../redux/rootReducer';
import { GameRoom } from '../../interfaces/game/GameRoom';
import { UserInfo } from '../../interfaces/game/UserInfo';
import { MAX_NUMBER_PLAYERS } from '../../constants/game/game_config';
import { JOIN_TO_GAME_ROOM, START_GAME, LEAVE_GAME_ROOM } from '../../constants/graphql/mutations';
import gamepad from '../../images/gamepad.svg';
import plus from '../../images/plus.svg';
import minus from '../../images/minus.svg';
import './GameRoomBlock.css';

const GameRoomBlock = ({ game_room }: { game_room: GameRoom }) => {
  const userInfo: UserInfo | null = useSelector((state: RootState) => state.user.userInfo);
  const [joinToGameRoom] = useMutation(JOIN_TO_GAME_ROOM);
  const [leaveGameRoom] = useMutation(LEAVE_GAME_ROOM);
  const [startGame] = useMutation(START_GAME);
  const players: number = game_room.players.length;
  const observers: number = game_room.observers.length;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inGame = () => {
    if (
      game_room.players.some((palyer: Player) => palyer.playerId === userInfo?.id) ||
      game_room.observers.some((observer: Player) => observer.playerId === userInfo?.id)
    ) {
      return true;
    }

    return false;
  };

  const handleJoinGameRoom = async (gameId: string) => {
    try {
      await joinToGameRoom({
        variables: { id: gameId },
        context: {
          headers: {
            Authorization: Cookies.get('token')
          }
        }
      });
    } catch (error) {
      const err = error as Error;
      if (!Cookies.get('token')) {
        navigate('/logIn');
      } else {
        dispatch(sendNotification(err.message));
      }
    }
  };

  const handleLeaveGameRoom = async (gameId: string) => {
    try {
      await leaveGameRoom({
        variables: { id: gameId },
        context: {
          headers: {
            Authorization: Cookies.get('token')
          }
        }
      });
    } catch (error) {
      const err = error as Error;
      if (!Cookies.get('token')) {
        navigate('/logIn');
      } else {
        dispatch(sendNotification(err.message));
      }
    }
  };

  const handleStartGame = async (gameId: string) => {
    try {
      await startGame({
        variables: { gameId: gameId },
        context: {
          headers: {
            Authorization: Cookies.get('token')
          }
        }
      });
      navigate('/game');
    } catch (error) {
      const err = error as Error;
      if (!Cookies.get('token')) {
        navigate('/logIn');
      } else {
        dispatch(sendNotification(err.message));
      }
    }
  };

  return (
    <div className="game_room">
      <span>
        {players + observers}/{MAX_NUMBER_PLAYERS}
      </span>
      <p className="game_room_name">{game_room.name}</p>
      <div className="participants">
        {game_room.players.map((player: Player) => (
          <p key={player.playerId}>{player.nickname}</p>
        ))}
        {game_room.observers.map((observer: Player) => (
          <p key={observer.playerId}>{observer.nickname}</p>
        ))}
      </div>
      <p className="game_room_creator">{game_room.creator.nickname}</p>
      <div className="actions_list">
        <button onClick={() => handleStartGame(game_room.id)}>
          <img alt="start game" title="start game" src={gamepad} />
        </button>
        {userInfo &&
          (!inGame() ? (
            <button onClick={() => handleJoinGameRoom(game_room.id)}>
              <img alt="join to game room" title="join to game room" src={plus} />
            </button>
          ) : (
            <button onClick={() => handleLeaveGameRoom(game_room.id)}>
              <img alt="leave game room" title="leave game room" src={minus} />
            </button>
          ))}
      </div>
    </div>
  );
};

export default GameRoomBlock;
