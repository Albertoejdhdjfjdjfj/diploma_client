import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import './GameHeaderBar.css';

const GameHeaderBar = () => {
  const navigate = useNavigate();

  const handleLeaveGame = () => {
    navigate('/');
  };

  return (
    <div className="game_header_bar">
      <a>
        Mafia
        <img alt="logo" src={logo} />
      </a>
      <p onClick={handleLeaveGame}>Leave Game</p>
    </div>
  );
};

export default GameHeaderBar;
