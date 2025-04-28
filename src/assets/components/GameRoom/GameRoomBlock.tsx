import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import { Player } from '../../interfaces/game/Player';
import { GameRoom } from '../../interfaces/game/GameRoom';
import { MAX_NUMBER_PLAYERS } from '../../constants/game/game_config';
import { JOIN_GAME_ROOM } from '../../constants/graphql/mutations';
import gamepad from '../../images/gamepad.svg';
import plus from '../../images/plus.svg';
import './GameRoomBlock.css';

const GameRoomBlock = ({ game_room}: { game_room: GameRoom}) => {
  const [joinGameRoom] = useMutation<{ createGameRoom: GameRoom }>(JOIN_GAME_ROOM);
  const players: number = game_room.players.length;
  const observers: number = game_room.observers.length;
  const navigate = useNavigate();

  const handleJoinGameRoom = async (gameId: string) => {
    try {
      await joinGameRoom({
        variables: { id: gameId },
        context: {
          headers: {
            Authorization: Cookies.get('token')
          }
        }
      });
      navigate('/');
    } catch {
      if (!Cookies.get('token')) {
        navigate('/logIn');
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
      <div className="start_or_join">
        <button>
          <img alt="start game" title="start game" src={gamepad} />
        </button>
        <button onClick={()=>handleJoinGameRoom(game_room.id)}>
          <img alt="join to game" title="join to game" src={plus} />
        </button>
      </div>
    </div>
  );
};

export default GameRoomBlock;
