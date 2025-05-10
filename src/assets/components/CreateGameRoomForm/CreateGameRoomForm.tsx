import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, UseDispatch } from 'react-redux';
import { GameRoom } from '../../interfaces/game/GameRoom';
import { CREATE_GAME_ROOM } from '../../constants/graphql/mutations';
import { useMutation } from '@apollo/client';
import { sendNotification } from '../../../redux/reducers/notificationsReducer/actions/actions';
import Cookies from 'js-cookie';
import './CreateGameRoomForm.css';

const CreateGameRoomForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createGameRoom, { loading, error }] = useMutation<{ createGameRoom: GameRoom }>(
    CREATE_GAME_ROOM
  );
  const [name, setName] = useState<string>('');

  const handleCreateRoom = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createGameRoom({
        variables: { name: name },
        context: {
          headers: {
            Authorization: Cookies.get('token')
          }
        }
      });
      navigate('/');
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
    <form className="create_game_room_form" onSubmit={handleCreateRoom}>
      <div>
        <p>Game room name</p>
        <input
          placeholder="game room name"
          type="text"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default CreateGameRoomForm;
