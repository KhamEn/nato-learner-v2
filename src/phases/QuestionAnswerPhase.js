import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Question from "./Question";
import styles from "./Phases.module.css";

function QuestionAnswerPhase({ score, letter, changeGamePhase, submitAnswer }) {
  const [textInput, setTextInput] = useState("");

  function handleClick() {
    submitAnswer(textInput);
    setTextInput("");
    changeGamePhase();
  }

  return (
    <form className={`${styles.formContainer} ${styles.elevated}`}>
      <Scoreboard score={score} />
      <Question letter={letter} />
      <section className={styles.UserSectionContainer}>
        <p>Type in the telephony</p>
        <input
          id="answer"
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button onClick={handleClick}>Check Answer</button>
      </section>
    </form>
  );
}

export default QuestionAnswerPhase;
