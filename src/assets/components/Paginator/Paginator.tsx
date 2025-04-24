import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';

const Paginator = () => {
     const page:number=useSelector((state:RootState)=>state.gameRooms.page);
     return (
          <div className='paginator'>
             <button></button>  
             <div>{page}</div>
             <button></button>
          </div>
     );
}

export default Paginator;
 