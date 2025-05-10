import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../redux/rootReducer';
import { UserInfo } from '../../interfaces/game/UserInfo';
import { fetchUserInfo } from '../../../redux/reducers/userReducer/actions/actions';
import logo from '../../images/logo.png';
import './HeaderBar.css';

const HeaderBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const userInfo:UserInfo|null = useSelector((state:RootState)=>state.user.userInfo)

  useEffect(()=>dispatch(fetchUserInfo()),[]);

  return (
    <div className="header_bar">
      <a>
        Mafia
        <img alt="logo" src={logo} />
      </a>
      <div>
        {
          userInfo?<p>{userInfo.nickname}</p>:<p onClick={()=>navigate('/logIn')}>Log In</p>
        }
      </div>
    </div>
  );
};

export default HeaderBar;
