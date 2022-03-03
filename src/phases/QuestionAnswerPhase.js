import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Question from "./Question";
import styles from "./Style.module.css";

function QuestionAnswerPhase({ score, letter, submitAnswer }) {
  const [textInput, setTextInput] = useState("");

  function handleClick(event) {
    event.preventDefault();

    submitAnswer(textInput);
    setTextInput("");
  }

  return (
    <form className={`${styles.formContainer} ${styles.utilsElevated}`}>
      <Scoreboard score={score} />
      <Question letter={letter} />
      <div>
        <label htmlFor="userInput">What is the telephony?</label>
      </div>
      <div>
        <input
          id="userInput"
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          autoFocus={true}
        />
      </div>
      <button onClick={handleClick}>Check Answer</button>
    </form>
  );
}

export default QuestionAnswerPhase;
