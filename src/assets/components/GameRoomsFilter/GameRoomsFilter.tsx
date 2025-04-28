import { useState, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setSort } from '../../../redux/reducers/gameRoomReducer/actions/actions';
import add from '../../images/add.svg';
import './GameRoomsFilter.css';

const GameRoomsFilter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterValue, setFilterValue] = useState<string>('');

  const handeleButtonClick = (): void => {
    if (Cookies.get('token')) {
      navigate('/create');
      return;
    }
    navigate('/logIn');
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.currentTarget.value) {
      dispatch(setSort(e.currentTarget.value));
    }
    setFilterValue(e.currentTarget.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(setSort(e.currentTarget.value));
    }
  };

  return (
    <div className="game_rooms_filter">
      <input
        type="text"
        placeholder="Quick Filter"
        onKeyDown={handleKeyDown}
        onChange={handleInput}
        value={filterValue}
      />
      <button onClick={handeleButtonClick}>
        <img title="create_game_room" src={add} />
      </button>
    </div>
  );
};

export default GameRoomsFilter;
