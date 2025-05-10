import CreateGameRoomForm from '../../assets/components/CreateGameRoomForm/CreateGameRoomForm';
import { useNavigate } from 'react-router-dom';
import back from '../../assets/images/back.svg';
import './CreateGameRoom.css';

const CreateGameRoom = () => {
  const navigate = useNavigate();
  return (
    <div className="create_game_room">
      <h1>Create Game Room</h1>
      <CreateGameRoomForm />
      <div onClick={() => navigate('/')}>
        <p>Back</p>
        <img src={back} />
      </div>
    </div>
  );
};

export default CreateGameRoom;
