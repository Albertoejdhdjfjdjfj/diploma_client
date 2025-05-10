import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreateGameRoom from './pages/CreateGameRoom/CreateGameRoom';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import PopUpWindow from './assets/components/PopUpWindow/PopUpWindow';
import Game from './pages/Game/Game';
import './App.css';
import { RootState } from './redux/rootReducer';

const App = () => {
  const content = useSelector((state: RootState) => state.notifications.content);
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
