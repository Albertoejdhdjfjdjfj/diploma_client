import { useSubscription } from '@apollo/client';
import { CHAT } from '../../assets/constants/graphql/subscriptions';
import Cookies from 'js-cookie';
import send from '../../assets/images/send.svg';
import './Game.css';

const Game = () => {
  const { data } = useSubscription(CHAT, {
    variables: { token: Cookies.get('token') },
    fetchPolicy: 'no-cache'
  });

  return (
    <div className="game">
      <form className="input_message">
        <input type="text" />
        <button>
          <img src={send} />
        </button>
      </form>
    </div>
  );
};

export default Game;
