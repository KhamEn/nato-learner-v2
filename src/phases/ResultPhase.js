import Question from "./Question";
import { getTelephony } from "../utils/NatoAlphabet";
import Scoreboard from "./Scoreboard";

function ResultPhase({ score, letter, userAnswer, onClick }) {
  return (
    <>
      <Scoreboard score={score} />
      <Question letter={letter} />
      <div>
        <p>You said: "{userAnswer}"</p>
        <p>{userAnswer === getTelephony(letter) ? "Correct." : "Incorrect."}</p>
      </div>
      <button onClick={onClick}>Next Question</button>
    </>
  );
}

export default ResultPhase;
