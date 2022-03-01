import { useEffect, useRef, useState } from "react";
import GamePhases from "./utils/GamePhases";
import ResultIcons from "./utils/ResultIcons";
import {
  getAlphabetSize,
  getRandomizedAlphabet,
  getTelephony,
} from "./utils/NatoAlphabet";
import ReportCardPhase from "./phases/ReportCardPhase";
import ResultPhase from "./phases/ResultPhase";
import QuestionAnswerPhase from "./phases/QuestionAnswerPhase";
import "./reset.css";
import "./app.css";

function NatoGame() {
  const [gamePhase, setGamePhase] = useState(GamePhases.QUESTION_ANSWER);
  const [visualScore, setVisualScore] = useState(null);

  const randomizedAlphabet = useRef(getRandomizedAlphabet());
  const alphabetIndex = useRef(0);
  const userAnswer = useRef("");
  const userPoints = useRef(0);
  const lettersOfWrongAnswers = useRef([]);

  // Initialize the visual score board
  useEffect(() => {
    const newScore = new Array(randomizedAlphabet.current.length).fill(
      ResultIcons.UNKNOWN
    );
    newScore[0] = ResultIcons.ACTIVE;
    setVisualScore(newScore);
  }, []);

  //  userAnswer state is not set here because it is always set to empty string by the QuestionAnswerPhase component
  function setupNewGame() {
    randomizedAlphabet.current = getRandomizedAlphabet();
    alphabetIndex.current = 0;
    const newScore = new Array(randomizedAlphabet.current.length).fill(
      ResultIcons.UNKNOWN
    );
    newScore[0] = ResultIcons.ACTIVE;
    setVisualScore(newScore);
    userPoints.current = 0;
    lettersOfWrongAnswers.current = [];
  }

  function submitUserAnswer(answer) {
    userAnswer.current = answer;
    let currentScore = visualScore;
    let currentLetter = randomizedAlphabet.current[alphabetIndex.current];
    if (answer.toLowerCase() === getTelephony(currentLetter).toLowerCase()) {
      userPoints.current = userPoints.current + 1;
      currentScore[alphabetIndex.current] = ResultIcons.CORRECT;
    } else {
      lettersOfWrongAnswers.current.push(currentLetter);
      currentScore[alphabetIndex.current] = ResultIcons.INCORRECT;
    }
    setVisualScore(currentScore);
    changeGamePhase();
  }

  function changeGamePhase() {
    switch (gamePhase) {
      case GamePhases.QUESTION_ANSWER:
        setGamePhase(GamePhases.RESULT);
        break;
      case GamePhases.RESULT:
        if (alphabetIndex.current + 1 >= randomizedAlphabet.current.length) {
          setGamePhase(GamePhases.REPORT_CARD);
        } else {
          alphabetIndex.current = alphabetIndex.current + 1;
          let currentScore = [...visualScore];
          currentScore[alphabetIndex.current] = ResultIcons.ACTIVE;
          setVisualScore(currentScore);
          setGamePhase(GamePhases.QUESTION_ANSWER);
        }
        break;
      case GamePhases.REPORT_CARD:
        setupNewGame();
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
            score={visualScore}
            letter={randomizedAlphabet.current[alphabetIndex.current]}
            submitAnswer={submitUserAnswer}
          />
        );
      case GamePhases.RESULT:
        return (
          <ResultPhase
            score={visualScore}
            letter={randomizedAlphabet.current[alphabetIndex.current]}
            userAnswer={userAnswer.current}
            onClick={changeGamePhase}
          />
        );
      case GamePhases.REPORT_CARD:
        return (
          <ReportCardPhase
            wrongAnswers={lettersOfWrongAnswers.current}
            score={visualScore}
            userPoints={userPoints.current}
            maxPoints={getAlphabetSize()}
            onClick={changeGamePhase}
          />
        );
      default:
        throw new Error("Invalid Game Phase");
    }
  }

  return <article className="container">{getCurrentPhaseComponents()}</article>;
}

function App() {
  return <NatoGame />;
}

export default App;
