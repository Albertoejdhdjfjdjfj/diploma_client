import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import './App.css';

const App = () => {
  return <div className="App">

    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/signIn' element={''}/>
        <Route path='/signUp' element={''}/>
    </Routes>
  </div>;
};

export default App;
