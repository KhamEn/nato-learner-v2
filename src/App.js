import { useRef, useState } from "react";
import { GamePhases } from "./utils/GamePhases";
import { getARandomizedAlphabet } from "./utils/NatoAlphabet";

function ReportCard({ score }) {
  const { incorrectLetters, setIncorrectLetters } = useState(null);
  return (
    <div>
      <p>Score percentage: {score} divided by length of the alphabet</p>
      <p>All the words that you got wrong are {incorrectLetters}</p>
      <button type="submit">Finish</button>
    </div>
  );
}

function Result({ letter, userInput }) {
  return (
    <div>
      <p>
        {userInput} === telephony of current letter: {letter}
      </p>
      <button type="submit">Next</button>
    </div>
  );
}

function Answer({ userInput }) {
  return (
    <div>
      <input type="text" value={userInput} />
      <button type="submit">Submit</button>
    </div>
  );
}

function Question({ letter }) {
  return <p>What is the telephony of {letter}</p>;
}

function Quizzer({ gamePhase }) {
  const randomizedAlphabet = useRef(getARandomizedAlphabet());
  const [letter, setLetter] = useState(randomizedAlphabet.current.pop());
  const [userInput, setUserInput] = useState("placeholder user input");

  return (
    <section>
      <Question letter={letter} />
      {gamePhase === GamePhases.ANSWER ? (
        <Answer userInput={userInput} />
      ) : (
        <Result letter={letter} userInput={userInput} />
      )}
    </section>
  );
}

function Scoreboard({ score }) {
  return <section>The score is: {score}</section>;
}

function NatoGame() {
  const [score, setScore] = useState(0);
  // TODO: Use enum of game phases
  const [gamePhase, setGamePhase] = useState(GamePhases.FINAL_RESULT);

  return (
    <form>
      <Scoreboard score={score} />
      {gamePhase === GamePhases.FINAL_RESULT ? (
        <ReportCard />
      ) : (
        <Quizzer gamePhase={gamePhase} />
      )}
    </form>
  );
}

function App() {
  return <NatoGame />;
}

export default App;
