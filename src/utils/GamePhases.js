import { Enumify } from "enumify";

class GamePhases extends Enumify {
  static QUESTION_ANSWER = new GamePhases();
  static RESULT = new GamePhases();
  static REPORT_CARD = new GamePhases();
  static _ = this.closeEnum();
}

export default GamePhases;
