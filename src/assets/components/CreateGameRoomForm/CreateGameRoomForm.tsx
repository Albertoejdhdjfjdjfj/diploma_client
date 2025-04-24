import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameRoom } from '../../interfaces/game/GameRoom';
import { CREATE_GAME_ROOM } from '../../constants/graphql/mutations';
import { ApolloError, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import './CreateGameRoomForm.css';

const CreateGameRoomForm = () => {
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
    } catch (err) {
      console.error(error);
      if (!Cookies.get('token')) {
        navigate('/logIn');
      }
    }
  };

  return (
    <form className="create_game_room_form" onSubmit={handleCreateRoom}>
      <div className="form_errors">{error ? error.message : ''}</div>
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
