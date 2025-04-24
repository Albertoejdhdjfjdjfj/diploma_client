import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import add from "../../images/add.svg"
import "./GameRoomsFilter.css"

const GameRoomsFilter = () => {   
     const navigate = useNavigate(); 
     const handeleButtonClick=():void =>{
          if(Cookies.get('token')){
               navigate('/create');
               return;
          }
          navigate('/logIn')
     }  
     return (
          <div className='game_rooms_filter'>
               <input type='text' placeholder='Quick Filter'/>
               <button onClick={()=>navigate('/create')}><img title='create_game_room' src={add}/></button>
          </div>
     );
}

export default GameRoomsFilter;
