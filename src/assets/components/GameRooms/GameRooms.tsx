import { GET_GAME_ROOMS } from '../../constants/graphql/queries';
import { useQuery } from '@apollo/client';
import { GameRoom } from '../../interfaces/game/GameRoom';
import GameRoomsFilter from '../GameRoomsFilter/GameRoomsFilter';
import GameRoomBlock from '../GameRoom/GameRoomBlock';
import Paginator from '../Paginator/Paginator';
import './GameRooms.css';

const GameRooms = () => {
  const { loading, error, data } = useQuery<{
    getGameRooms: Array<GameRoom>;
  }>(GET_GAME_ROOMS, {
    variables: {
      sort: '',
      page: 1,
      limit: 1
    },
    notifyOnNetworkStatusChange: true
  });

  if (loading) return <div>...Loading</div>;
  if (error) return <div>Error!{error.name}</div>;
  if (!data) return <div></div>;

  return (
    <div className="game_rooms">
      <GameRoomsFilter />
      <div className="game_rooms_colums">
        <p>Slots</p>
        <p>Game</p>
        <p>Participants</p>
        <p>Creator</p>
        <p></p>
      </div>
      {data.getGameRooms.map((game_room: GameRoom) => (
        <GameRoomBlock game_room={game_room} key={game_room.id} />
      ))}
      <Paginator/>
    </div>
  );
};

export default GameRooms;
