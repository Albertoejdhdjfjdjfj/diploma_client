import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import Arrow from '../../images/arrow.svg';
import { nextPage, previousPage } from '../../../redux/reducers/gameRoomReducer/actions/actions';
import './Paginator.css';

const Paginator = () => {
  const page: number = useSelector((state: RootState) => state.gameRooms.page);
  const dispatch = useDispatch();

  const handlePreviousPage = () => {
    if (page !== 1) {
      dispatch(previousPage());
    }
  };

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  return (
    <div className="paginator">
      <button onClick={handlePreviousPage}>
        <img src={Arrow} />
      </button>
      <div>{page}</div>
      <button onClick={handleNextPage}>
        <img src={Arrow} />
      </button>
    </div>
  );
};

export default Paginator;
