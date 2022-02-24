import Question from "./Question";
import { getTelephony } from "../utils/NatoAlphabet";
import Scoreboard from "./Scoreboard";

function ResultPhase({ score, letter, userInput, onClick }) {
  return (
    <>
      <Scoreboard score={score} />
      <Question letter={letter} />
      <p>user input is correct/incorrect</p>
      {/*<p>{userInput === getTelephony(letter)}</p>*/}
      <button onClick={onClick}>Next Question</button>
    </>
  );
}

export default ResultPhase;
