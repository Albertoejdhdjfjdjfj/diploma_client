import { Player } from './Player';

export interface Message {
  id: string;
  sender: Player;
  receiverRole: string;
  content: string;
  phase: string;
}
