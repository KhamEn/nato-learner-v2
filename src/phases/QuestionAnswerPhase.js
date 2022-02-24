import Scoreboard from "./Scoreboard";
import Question from "./Question";
import { useState } from "react";

function QuestionAnswerPhase({ score, letter, changeGamePhase, submitAnswer }) {
  const [textInput, setTextInput] = useState("");

  function handleClick() {
    submitAnswer(textInput);
    setTextInput("");
    changeGamePhase();
  }

  return (
    <form>
      <Scoreboard score={score} />
      <Question letter={letter} />
      <input
        type="text"
        value={textInput}
        onChange={(event) => setTextInput(event.target.value)}
      />
      <button onClick={handleClick}>Check Answer</button>;
    </form>
  );
}

export default QuestionAnswerPhase;
