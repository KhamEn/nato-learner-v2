import { Enumify } from "enumify";

class GamePhases extends Enumify {
  static ANSWER = new GamePhases();
  static RESULT = new GamePhases();
  static FINAL_RESULT = new GamePhases();
  static _ = this.closeEnum();
}

export { GamePhases };
