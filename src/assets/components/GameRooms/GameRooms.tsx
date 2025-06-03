import { useState, useEffect } from 'react';
import { GET_GAME_ROOMS } from '../../constants/graphql/queries';
import { UPDATED_GAME_ROOM } from '../../constants/graphql/subscriptions';
import { useQuery, useLazyQuery, useSubscription } from '@apollo/client';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import { GameRoom } from '../../interfaces/game/GameRoom';
import GameRoomsFilter from '../GameRoomsFilter/GameRoomsFilter';
import GameRoomBlock from '../GameRoom/GameRoomBlock';
import Paginator from '../Paginator/Paginator';
import './GameRooms.css';

const GameRooms = () => {
  const [gameRooms, setGameRooms] = useState<Array<GameRoom> | undefined>(undefined);
  const { sort, page, limit } = useSelector((state: RootState) => state.gameRooms);

  const [getGameRooms, { loading, error }] = useLazyQuery(GET_GAME_ROOMS, {
    variables: { sort, page, limit },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache'
  });
  const { data } = useSubscription(UPDATED_GAME_ROOM);

  const handleGetRooms = async () => {
    const { data } = await getGameRooms();
    console.log(data);
    setGameRooms(data?.getGameRooms);
  };

  useEffect(() => {
    handleGetRooms();
  }, [page, sort, data]);

  return (
    <div className="game_rooms">
      <GameRoomsFilter />
      <div className="game_rooms_columns">
        <p>Slots</p>
        <p>Game</p>
        <p>Participants</p>
        <p>Creator</p>
        <p></p>
      </div>

      {loading && <div>...Loading</div>}
      {error && <div>Error! {error.message}</div>}

      <div className="rooms">
        {gameRooms && gameRooms.map((game_room) => <GameRoomBlock game_room={game_room} />)}
      </div>

      <Paginator />
    </div>
  );
};

export default GameRooms;
