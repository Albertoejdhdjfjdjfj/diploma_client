import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSubscription, useLazyQuery } from '@apollo/client';
import { setActiveGameId } from './redux/reducers/gameReducer/actions/actions';
import { fetchUserInfo } from './redux/reducers/userReducer/actions/actions';
import { ACTIVE_GAME } from './assets/constants/graphql/subscriptions';
import { GET_ACTIVE_GAME } from './assets/constants/graphql/queries';
import CreateGameRoom from './pages/CreateGameRoom/CreateGameRoom';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import PopUpWindow from './assets/components/PopUpWindow/PopUpWindow';
import Game from './pages/Game/Game';
import './App.css';
import { RootState } from './redux/rootReducer';

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token: string | undefined = Cookies.get('token');
  const content = useSelector((state: RootState) => state.notifications.content);
  const [getActiveGame] = useLazyQuery<{ getActiveGame: { gameId: string } }>(GET_ACTIVE_GAME, {
    context: {
      headers: {
        Authorization: token
      }
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache'
  });

  const { data: activeGame } = useSubscription<{ activeGame: { gameId: string } }>(ACTIVE_GAME, {
    variables: { token }
  });

  const handleActiveGame = async () => {
    const { data } = await getActiveGame();
    if (data && data.getActiveGame.gameId) {
      dispatch(setActiveGameId(data.getActiveGame.gameId));
      navigate('/game');
      return;
    }
    dispatch(setActiveGameId(null));
    navigate('/');
  };

  useEffect(() => {
    handleActiveGame();
  }, [activeGame]);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  return (
    <div className="App">
      {content ? <PopUpWindow content={content} /> : ''}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<Game />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/create" element={<CreateGameRoom />} />
      </Routes>
    </div>
  );
};

export default App;
