import { Player } from './Player';

export interface GameRoom {
  id: string;
  name: string;
  creator: Player;
  players: Array<Player>;
  observers: Array<Player>;
}
