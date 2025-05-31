import { ChangeEvent, KeyboardEvent } from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, useSubscription, useMutation } from '@apollo/client';
import { GET_MESSAGES } from '../../assets/constants/graphql/queries';
import { NEW_MESSAGE } from '../../assets/constants/graphql/subscriptions';
import { SEND_MESSAGE } from '../../assets/constants/graphql/mutations';
import GameHeaderBar from '../../assets/components/GameHeaderBar/GameHeaderBar';
import send from '../../assets/images/send.svg';
import Cookies from 'js-cookie';
import { Message } from '../../assets/interfaces/game/Message';
import { RootState } from '../../redux/rootReducer';
import { UserInfo } from '../../assets/interfaces/game/UserInfo';
import { sendNotification } from '../../redux/reducers/notificationsReducer/actions/actions';
import './Game.css';

const Game = () => {
  const userInfo: UserInfo | null = useSelector((state: RootState) => state.user.userInfo);
  const gameId: string | null = useSelector((state: RootState) => state.game.activeGameId);
  const token: string | undefined = Cookies.get('token');
  const dispatch = useDispatch();

  const [messages, setMessages] = useState<Array<Message>>([]);
  const [content, setContent] = useState<string>('');
  const [focus,setFocus] = useState<boolean>(false)

  const { data } = useQuery(GET_MESSAGES, {
    variables: { gameId },
    context: {
      headers: {
        Authorization: token
      }
    },
    fetchPolicy: 'no-cache'
  });

  const { data: newMessage } = useSubscription(NEW_MESSAGE, {
    variables: { token, gameId }
  });

  const [sendMessage] = useMutation(SEND_MESSAGE);

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

  function handleInputMessage(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.currentTarget.value);
  }

  function changeFocus(){
    setFocus(!focus)
  }

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      try {
        await sendMessage({
          variables: { content, gameId },
          context: {
            headers: {
              Authorization: token
            }
          }
        });
      } catch (error) {
        const err = error as Error;
        dispatch(sendNotification(err.message));
      } finally {
        setContent('');
      }
    }
  };

  async function handeleButtonClick() {
    try {
      await sendMessage({
        variables: { content, gameId },
        context: {
          headers: {
            Authorization: token
          }
        }
      });
    } catch (error) {
      const err = error as Error;
      dispatch(sendNotification(err.message));
    } finally {
      setContent('');
    }
  }

  return (
    <div className="game">
      <GameHeaderBar />
      <div className="messages">
        {messages.map((message: Message) => (
          <div
            key={message.id}
            className={isUserMessage(message.sender.playerId) ? 'user_message' : 'message'}
          >
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <div className={"input_message"+' '+(focus?'focus':'')} >
        <input
          type="text"
          onChange={handleInputMessage}
          onKeyDown={handleKeyDown}
          onFocus={changeFocus}
          onBlur={changeFocus}
          value={content}
        />
        <button type="submit" onClick={handeleButtonClick}>
          <img src={send} alt="Send" />
        </button>
      </div>
    </div>
  );
};

export default Game;
