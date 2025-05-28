import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSubscription } from '@apollo/client';
import { ROLE } from '../../constants/graphql/subscriptions';
import Cookies from 'js-cookie';
import logo from '../../images/logo.png';
import './GameHeaderBar.css';

const GameHeaderBar = () => {
  const navigate = useNavigate();
  const gameId = Cookies.get('gameId');
  const token = Cookies.get('token');

  const { data } = useSubscription<{ role: string }>(ROLE, {
    variables: { gameId, token }
  });

  const handleLeaveGame = () => {
    navigate('/');
  };

  return (
    <div className="game_header_bar">
      <a>
        Mafia
        <img alt="logo" src={logo} />
      </a>
      {data && <span>{data.role}</span>}
      <p onClick={handleLeaveGame}>Leave Game</p>
    </div>
  );
};

export default GameHeaderBar;
