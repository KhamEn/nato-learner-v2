import { useRef, useState } from "react";
import GamePhases from "./utils/GamePhases";
import { getARandomizedAlphabet } from "./utils/NatoAlphabet";
import ReportCardPhase from "./phases/ReportCardPhase";
import ResultPhase from "./phases/ResultPhase";
import QuestionAnswerPhase from "./phases/QuestionAnswerPhase";

function NatoGame() {
  const randomizedAlphabet = useRef(getARandomizedAlphabet());
  const [letter, setLetter] = useState(() => randomizedAlphabet.current.pop());
  const [score, setScore] = useState(0);
  const [gamePhase, setGamePhase] = useState(GamePhases.QUESTION_ANSWER);

  function changeGamePhase() {
    console.log(randomizedAlphabet.current);
    switch (gamePhase) {
      case GamePhases.QUESTION_ANSWER:
        setGamePhase(GamePhases.RESULT);
        break;
      case GamePhases.RESULT:
        if (randomizedAlphabet.current.length === 0) {
          randomizedAlphabet.current = getARandomizedAlphabet();
          setLetter(randomizedAlphabet.current.pop());
          setGamePhase(GamePhases.REPORT_CARD);
        } else {
          setLetter(randomizedAlphabet.current.pop());
          setGamePhase(GamePhases.QUESTION_ANSWER);
        }
        break;
      case GamePhases.REPORT_CARD:
        // TODO: Start over, not just go to Answer phase
        setGamePhase(GamePhases.QUESTION_ANSWER);
        break;
      default:
        throw new Error("Invalid Game Phase");
    }
  }

  function getCurrentPhaseComponents() {
    switch (gamePhase) {
      case GamePhases.REPORT_CARD:
        return <ReportCardPhase score={score} onClick={changeGamePhase} />;
      case GamePhases.RESULT:
        return (
          <ResultPhase
            score={score}
            letter={letter}
            onClick={changeGamePhase}
          />
        );
      case GamePhases.QUESTION_ANSWER:
        return (
          <QuestionAnswerPhase
            score={score}
            letter={letter}
            onClick={changeGamePhase}
          />
        );
      default:
        throw new Error("Invalid Game Phase");
    }
  }

  return <>{getCurrentPhaseComponents()}</>;
}

function App() {
  return <NatoGame />;
}

export default App;
