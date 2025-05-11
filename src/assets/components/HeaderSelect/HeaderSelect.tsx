import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../../redux/reducers/userReducer/actions/actions';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../redux/rootReducer';
import { UserInfo } from '../../interfaces/game/UserInfo';
import Cookies from 'js-cookie';
import triangle from '../../images/triangle.png';
import './HeaderSelect.css';

const HeaderSelect = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo: UserInfo | null = useSelector((state: RootState) => state.user.userInfo);
  const [isActive, changeActive] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleLogOut = () => {
    Cookies.remove('token');
    dispatch(fetchUserInfo());
  };

  const handleClick = () => {
    changeActive((state) => !state);
  };

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        spanRef.current &&
        !spanRef.current.contains(event.target as Node)
      ) {
        changeActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, spanRef]);

  return (
    <div className="header_select">
      <span onClick={handleClick} ref={spanRef}>
        {userInfo ? (
          <>
            <p>{userInfo.nickname}</p>{' '}
            <img
              className={isActive && userInfo ? 'rotated_triangle' : ''}
              src={triangle}
              alt="triangle"
            />
          </>
        ) : (
          <p onClick={() => navigate('/logIn')}>Log In</p>
        )}
      </span>
      {isActive && userInfo && (
        <div ref={dropdownRef}>
          <p>Settings</p>
          <p onClick={() => navigate('/create')}>Create game room</p>
          <p onClick={handleLogOut}>Log Out</p>
        </div>
      )}
    </div>
  );
};

export default HeaderSelect;
