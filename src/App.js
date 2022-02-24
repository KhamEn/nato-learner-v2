import { useEffect, useRef, useState } from "react";
import GamePhases from "./utils/GamePhases";
import {
  getAlphabetSize,
  getARandomizedAlphabet,
  getTelephony,
} from "./utils/NatoAlphabet";
import ReportCardPhase from "./phases/ReportCardPhase";
import ResultPhase from "./phases/ResultPhase";
import QuestionAnswerPhase from "./phases/QuestionAnswerPhase";

function NatoGame() {
  const randomizedAlphabet = useRef(getARandomizedAlphabet());
  const [letter, setLetter] = useState(() => randomizedAlphabet.current.pop());
  const [points, setPoints] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [gamePhase, setGamePhase] = useState(GamePhases.QUESTION_ANSWER);

  /**
     Add a point to the points if the user answer the question correctly.
     useEffect() because states are not updated immediately,
     if the code is in changeGamePhase() function, userAnswer state is not up to date.
     */
  useEffect(() => {
    if (userAnswer === getTelephony(letter)) {
      setPoints(points + 1);
    }
  }, [userAnswer]);

  //  userAnswer state is not set here because it is always set to empty string by the QuestionAnswerPhase component
  function resetGameData() {
    randomizedAlphabet.current = getARandomizedAlphabet();
    setLetter(randomizedAlphabet.current.pop());
    setPoints(0);
  }

  function changeGamePhase() {
    switch (gamePhase) {
      case GamePhases.QUESTION_ANSWER:
        setGamePhase(GamePhases.RESULT);
        break;
      case GamePhases.RESULT:
        if (randomizedAlphabet.current.length === 0) {
          setGamePhase(GamePhases.REPORT_CARD);
        } else {
          setLetter(randomizedAlphabet.current.pop());
          setGamePhase(GamePhases.QUESTION_ANSWER);
        }
        break;
      case GamePhases.REPORT_CARD:
        resetGameData();
        setGamePhase(GamePhases.QUESTION_ANSWER);
        break;
      default:
        throw new Error("Invalid Game Phase");
    }
  }

  function getCurrentPhaseComponents() {
    switch (gamePhase) {
      case GamePhases.QUESTION_ANSWER:
        return (
          <QuestionAnswerPhase
            score={points}
            letter={letter}
            changeGamePhase={changeGamePhase}
            submitAnswer={setUserAnswer}
          />
        );
      case GamePhases.RESULT:
        return (
          <ResultPhase
            score={points}
            letter={letter}
            userAnswer={userAnswer}
            onClick={changeGamePhase}
          />
        );
      case GamePhases.REPORT_CARD:
        return (
          <ReportCardPhase
            userPoints={points}
            maxPoints={getAlphabetSize()}
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
