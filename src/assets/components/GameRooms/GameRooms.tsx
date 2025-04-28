import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { GET_GAME_ROOMS } from '../../constants/graphql/queries';
import { JOIN_GAME_ROOM } from '../../constants/graphql/mutations';
import { UPDATED_GAME_ROOM } from '../../constants/graphql/subscriptions';
import { useLazyQuery, useMutation,useSubscription } from '@apollo/client';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import { GameRoom } from '../../interfaces/game/GameRoom';
import GameRoomsFilter from '../GameRoomsFilter/GameRoomsFilter';
import GameRoomBlock from '../GameRoom/GameRoomBlock';
import Paginator from '../Paginator/Paginator';
import './GameRooms.css';
 
const GameRooms = () => {
  const [gameRooms, setGameRooms] = useState<Array<GameRoom> | undefined>(undefined);
  const page = useSelector((state: RootState) => state.gameRooms.page);
  const sort = useSelector((state: RootState) => state.gameRooms.sort);

  const [getGameRooms, { loading, error }] = useLazyQuery(GET_GAME_ROOMS, {
    variables: { sort, page, limit: 5 },
    notifyOnNetworkStatusChange: true,
  });

  const { data } = useSubscription(UPDATED_GAME_ROOM);


  const handleGetRooms = async () => {
    const { data } = await getGameRooms();
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
      {!gameRooms ? (
        <div>No data available</div>
      ) : (
        <div className="rooms">
          {gameRooms.map((game_room) => (
            <GameRoomBlock game_room={game_room}/>
          ))}
        </div>
      )}
      <Paginator />
    </div>
  );
};

export default GameRooms;
