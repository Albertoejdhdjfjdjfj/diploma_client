import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useQuery, useSubscription } from '@apollo/client';
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
  const token: string | undefined = Cookies.get('token');

  const { data, loading, error } = useQuery(GET_MESSAGES, {
    variables: { gameId },
    context: {
      headers: {
        Authorization: token,
      },
    },
    fetchPolicy: 'no-cache',
  });

  const { data: newMessage } = useSubscription(NEW_MESSAGE, {
    variables: { token, gameId },
  });

  const [messages, setMessages] = useState<Array<Message>>([]);

  useEffect(() => {
    if (data) {
      setMessages(data.getMessages);
    }
  }, [data]);

  useEffect(() => {
    if (newMessage) {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }
  }, [newMessage]);

  const isUserMessage = (messageId: string): boolean => userInfo?.id === messageId;

  return (
    <div className="game">
      <GameHeaderBar />
      <div className="messages">
        {loading && <div>...Loading</div>}
        {error && <div>Error! {error.message}</div>}
        {messages.map((message: Message) => (
          <div key={message.id} className={isUserMessage(message.id) ? 'user_message' : ''}>
            {message.content}
          </div>
        ))}
      </div>
      <form className="input_message" onSubmit={(e) => e.preventDefault()}>
        <input type="text" />
        <button type="submit">
          <img src={send} alt="Send" />
        </button>
      </form>
    </div>
  );
};

export default Game;