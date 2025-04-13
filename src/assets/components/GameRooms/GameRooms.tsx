import { GET_GAME_ROOMS } from '../../constants/graphql/queries';
import { useQuery } from '@apollo/client';
import { GameRoom } from '../../interfaces/GameRoom';
import GameRoomBlock from '../GameRoom/GameRoomBlock';

const GameRooms = () => {
     const { loading, error, data, refetch, networkStatus } = useQuery<{getGameRooms:Array<GameRoom>}>(
          GET_GAME_ROOMS,
          {
            variables: {
                         sort: "",
                         page: 1,
                         limit: 1
                       },
            notifyOnNetworkStatusChange: true,
          }
     );

     if (loading) return <div>...Loading</div>;
     if (error) return <div>Error!{error.name}</div>;
     if(!data) return <div></div>
     console.log(data)
     
     return (
          <div className='game_rooms'>
               {data.getGameRooms.map((game_room:GameRoom) => <GameRoomBlock game_room={game_room} key={game_room.id}/>)}
          </div>
     );
}

export default GameRooms;
