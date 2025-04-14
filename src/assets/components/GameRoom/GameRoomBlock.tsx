import React from 'react';
import { Player } from '../../interfaces/Player';
import { GameRoom } from '../../interfaces/GameRoom';
import { MAX_NUMBER_PLAYERS } from '../../constants/game/game_config';
import gamepad from '../../images/gamepad.svg';
import plus from '../../images/plus.svg';
import './GameRoomBlock.css';

const GameRoomBlock = ({ game_room }: { game_room: GameRoom }) => {
  const players: number = game_room.players.length;
  const observers: number = game_room.observers.length;
  return (
    <div className="game_room">
      <span>
        {players + observers}/{MAX_NUMBER_PLAYERS}
      </span>
      <p className="game_room_name">{game_room.name}</p>
      <div className="participants">
        {game_room.players.map((player: Player) => (
          <p>{player.nickname}</p>
        ))}
        {game_room.observers.map((observer: Player) => (
          <p>{observer.nickname}</p>
        ))}
      </div>
      <p className="game_room_creator">{game_room.creator.nickname}</p>
      <div className="start_or_join">
        <button>
          <img alt="start game" title="start game" src={gamepad} />
        </button>
        <button>
          <img alt="join to game" title="join to game" src={plus} />
        </button>
      </div>
    </div>
  );
};

export default GameRoomBlock;
