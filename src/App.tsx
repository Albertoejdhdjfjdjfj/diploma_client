import { Route, Routes } from 'react-router-dom';
import CreateGameRoom from './pages/CreateGameRoom/CreateGameRoom';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/create" element={<CreateGameRoom />} />
      </Routes>
    </div>
  );
};

export default App;
