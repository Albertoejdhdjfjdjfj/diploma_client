import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLazyQuery, useSubscription } from '@apollo/client';
import { GET_MESSAGES } from '../../assets/constants/graphql/queries';
import { NEW_MESSAGE } from '../../assets/constants/graphql/subscriptions';
import GameHeaderBar from '../../assets/components/GameHeaderBar/GameHeaderBar';
import send from '../../assets/images/send.svg';
import './Game.css';
import Cookies from 'js-cookie';
import { Message } from '../../assets/interfaces/game/Message';
import { RootState } from '../../redux/rootReducer';
import { UserInfo } from '../../assets/interfaces/game/UserInfo';

const Game = () => {
  const userInfo: UserInfo | null = useSelector((state: RootState) => state.user.userInfo);
  const gameId: string | null = useSelector((state: RootState) => state.game.activeGameId);
  const [messages, setMessages] = useState<Array<Message>>([]);
  const token: string | undefined = Cookies.get('token');

  const [getMessages] = useLazyQuery<{ getMessages: Array<Message> }>(GET_MESSAGES, {
    variables: { gameId },
    context: {
      headers: {
        Authorization: token
      }
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache'
  });

  const { data: newMessage } = useSubscription(NEW_MESSAGE, {
    variables: { token, gameId }
  });

  const isUserMessage = (messageId: string): boolean => {
    if (userInfo && userInfo.id === messageId) {
      return true;
    }
    return false;
  };

  const handleGetMessages = async () => {
    const { data } = await getMessages();
    console.log(data);
    if (data) {
      setMessages(data.getMessages);
    }
  };

  useEffect(() => {
    handleGetMessages();
  }, []);

  return (
    <div className="game">
      <GameHeaderBar />
      <div className="messages">
        {messages.map((message: Message) => (
          <div key={message.id} className={isUserMessage(message.id) ? 'user_message' : ''}>
            {message.content}
          </div>
        ))}
      </div>
      <form className="input_message">
        <input type="text" />
        <button type="submit">
          <img src={send} alt="Send" />
        </button>
      </form>
    </div>
  );
};

export default Game;
