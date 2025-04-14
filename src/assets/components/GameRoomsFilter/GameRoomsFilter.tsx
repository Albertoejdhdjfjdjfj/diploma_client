import React from 'react';
import plus from "../../images/plus.svg"
import "./GameRoomsFilter.css"

const GameRoomsFilter = () => {
     return (
          <div className='game_rooms_filter'>
               <input type='text' placeholder='Quick Filter'/>
               <button><img src={plus}/></button>
          </div>
     );
}

export default GameRoomsFilter;
