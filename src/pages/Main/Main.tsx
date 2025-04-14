import React from 'react';
import GameRooms from '../../assets/components/GameRooms/GameRooms';
import HeaderBar from '../../assets/components/HeaderBar/HeaderBar';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <HeaderBar/>
      <GameRooms />
    </div>
  );
};

export default Main;
